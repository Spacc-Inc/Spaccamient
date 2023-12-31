/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Page } from "playwright-core";

export class Labs {
    constructor(private page: Page) {}

    /**
     * Enables a labs feature for an element session.
     * @param feature labsFeature to enable (e.g. "feature_spotlight")
     */
    public async enableLabsFeature(feature: string): Promise<void> {
        if (this.page.url() === "about:blank") {
            await this.page.addInitScript((feature) => {
                window.localStorage.setItem(`mx_labs_feature_${feature}`, "true");
            }, feature);
        } else {
            await this.page.evaluate((feature) => {
                window.localStorage.setItem(`mx_labs_feature_${feature}`, "true");
            }, feature);
        }
    }
}
