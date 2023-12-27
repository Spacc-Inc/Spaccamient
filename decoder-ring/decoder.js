class StartupError extends Error{}async function getBundleName(e){const t=await fetch(new URL("index.html",e).toString());if(!t.ok)throw new StartupError(`Couldn't fetch index.html to prefill bundle; ${t.status} ${t.statusText}`);return(await t.text()).split("\n").map((e=>e.match(/<script src="bundles\/([^/]+)\/bundle.js"/))).filter((e=>e)).map((e=>e[1]))[0]}function validateBundle(e){return e.match(/^[0-9a-f]{20}$/)?Some.of(e):None}const bundleCache=new Map;function bundleSubject(e,t){if(!t.match(/^[0-9a-f]{20}$/))throw new Error("Bad input");if(bundleCache.has(t))return bundleCache.get(t);const n=new rxjs.BehaviorSubject(Pending.of());return bundleCache.set(t,n),fetch(new URL(`bundles/${t}/bundle.js.map`,e).toString()).then((e=>{e.body.cancel();e.ok?n.next(Success.of()):n.next(FetchError.of(`Failed to fetch: ${e.status} ${e.statusText}`))})),n}function observeReadableStream(e,t={}){let n=0,a="";const r=new rxjs.BehaviorSubject(Pending.of({...t,bytesReceived:n})),o=r.pipe(rxjs.operators.throttleTime(100)),s=new rxjs.Subject,c=e.getReader(),l=new TextDecoder("utf-8");return function e(){c.read().then((({done:o,value:c})=>{if(o)return r.complete(),void s.next(Success.of(a));n+=c.length,r.next(Pending.of({...t,bytesReceived:n})),a+=l.decode(c),e()}))}(),rxjs.concat(o,s)}const fetchCache=new Map;function fetchAsSubject(e){if(fetchCache.has(e))return fetchCache.get(e);const t=new rxjs.BehaviorSubject(Pending.of());return fetchCache.set(e,t),fetch(e).then((n=>{if(!n.ok)return void t.next(FetchError.of(`Failed to fetch endpoint ${e}: ${n.status} ${n.statusText}`));const a=n.headers.get("content-length"),r=a?{length:parseInt(a)}:{};observeReadableStream(n.body,r).subscribe((e=>{t.next(e)}))})),t}const e=React.createElement;function ProgressBar({fetchStatus:t}){return e("span",{className:"progress "},t.fold({pending:({bytesReceived:t,length:n})=>{if(!t)return e("span",{className:"spinner"},"⦵");const a=Math.floor(10*t/1024)/10;if(!n)return e("span",null,`Fetching (${a}kB)`);const r=Math.floor(100*t/n);return e("span",null,`Fetching (${a}kB) ${r}%`)},success:()=>e("span",null,"✓"),error:t=>e("span",{className:"error"},`✗ ${t}`)}))}function BundlePicker(){const[t,n]=React.useState(new URL("..",window.location).toString()),[a,r]=React.useState(""),[o,s]=React.useState(""),[c,l]=React.useState("1"),[u,i]=React.useState(""),[d,f]=React.useState(None),[h,b]=React.useState(None),[p,m]=React.useState(None);React.useEffect((()=>{console.log("DEBUG",t),getBundleName(t).then((e=>{console.log("DEBUG",e),""===a&&validateBundle(e)!==None&&r(e)}),console.log.bind(console))}),[t]);const g=React.useCallback((e=>{const t=e.target.value;n(t)}),[]),S=React.useCallback((e=>{const t=e.target.value;r(t)}),[]),v=React.useCallback((e=>{const t=e.target.value;s(t)}),[]),R=React.useCallback((e=>{const t=e.target.value;l(t)}),[]),x=React.useCallback((e=>{const t=e.target.value;i(t)}),[]);return React.useEffect((()=>validateBundle(a).fold({some:e=>{const n=bundleSubject(t,e).pipe(rxjs.operators.map(Some.of)).subscribe(b);return()=>n.unsubscribe()},none:()=>b(None)})),[t,a]),React.useEffect((()=>{if(!o.match(/.\.js$/)||validateBundle(a)===None)return void m(None);const e=fetchAsSubject(new URL(`bundles/${a}/${o}.map`,t).toString()).pipe(rxjs.operators.map((e=>e.flatMap((e=>{try{return Success.of(JSON.parse(e))}catch(e){return FetchError.of(e)}})))),rxjs.operators.map(Some.of)),n=e.subscribe(m);return()=>n.unsubscribe()}),[t,a,o]),React.useEffect((()=>{p.fold({some:e=>e.fold({success:e=>{if(!c)return f(None);const t=parseInt(c),n=parseInt(u);sourceMap.SourceMapConsumer.with(e,void 0,(e=>e.originalPositionFor({line:t,column:n}))).then((e=>f(Some.of(JSON.stringify(e)))))}}),none:()=>f(None)})}),[p,c,u]),e("div",{},e("div",{className:"inputs"},e("div",{className:"baseUrl"},e("label",{htmlFor:"baseUrl"},"Base URL"),e("input",{name:"baseUrl",required:!0,pattern:".+",onChange:g,value:t})),e("div",{className:"bundle"},e("label",{htmlFor:"bundle"},"Bundle"),e("input",{name:"bundle",required:!0,pattern:"[0-9a-f]{20}",onChange:S,value:a}),h.fold({some:t=>e(ProgressBar,{fetchStatus:t}),none:()=>null})),e("div",{className:"file"},e("label",{htmlFor:"file"},"File"),e("input",{name:"file",required:!0,pattern:".+\\.js",onChange:v,value:o}),p.fold({some:t=>e(ProgressBar,{fetchStatus:t}),none:()=>null})),e("div",{className:"line"},e("label",{htmlFor:"line"},"Line"),e("input",{name:"line",required:!0,pattern:"[0-9]+",onChange:R,value:c})),e("div",{className:"column"},e("label",{htmlFor:"column"},"Column"),e("input",{name:"column",required:!0,pattern:"[0-9]+",onChange:x,value:u}))),e("div",null,d.fold({none:()=>"Select a bundle, file and line",some:t=>e("pre",null,t)})))}window.Decoder={BundlePicker};