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
/**
 * Here you can find two example Webrtc reports and use them for testing.
 * The reports were generated with Chrome/Mac and `RTCPeerConnection: getStats()` method.
 * Webrtc stats change over time and people are often interested in time-dependent statements.
 * That's why there are two reports (`prevChromeReport`, `currentChromeReport`) here that were recorded 10 seconds apart.
 *
 * Notice:
 * Because RTCStatsReport is more than just a data object, I left out the cast of the reports to RTCStatsReport.
 * With other words, I didn't want cover the behavior of RTCStatsReport here.
 */
export const prevChromeReport = [
    {
        id: "AP",
        timestamp: 1685442202456.655,
        type: "media-playout",
        kind: "audio",
        synthesizedSamplesDuration: 0,
        synthesizedSamplesEvents: 0,
        totalPlayoutDelay: 11192.89248,
        totalSamplesCount: 477600,
        totalSamplesDuration: 9.95,
    },
    {
        id: "CF8D:03:B2:A8:7F:FE:52:60:98:42:3F:F1:A3:61:89:CD:B2:39:0E:17:F7:AE:57:79:5F:96:6F:41:E8:DA:CB:2D",
        timestamp: 1685442202456.655,
        type: "certificate",
        base64Certificate:
            "MIIBFjCBvKADAgECAggGFX25uzXk/jAKBggqhkjOPQQDAjARMQ8wDQYDVQQDDAZXZWJSVEMwHhcNMjMwNTI5MTAyMzEyWhcNMjMwNjI5MTAyMzEyWjARMQ8wDQYDVQQDDAZXZWJSVEMwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATICxbNzVNS8Z+SEntEKIYTryX5Ib0Fglm9Z8+nqsgiLOPOKPz+tc/dzE/55de4VQXJIJrO+wJ/c+JCOfp3sqlSMAoGCCqGSM49BAMCA0kAMEYCIQCZ95K1ot41YP/3Q4cURKDjHcYkBcAVkHBupmnWxVY+LQIhAKQwE43fZLYiEBG+AvFjj2sicilsEZ6r71E61YYZmYqz",
        fingerprint: "8D:03:B2:A8:7F:FE:52:60:98:42:3F:F1:A3:61:89:CD:B2:39:0E:17:F7:AE:57:79:5F:96:6F:41:E8:DA:CB:2D",
        fingerprintAlgorithm: "sha-256",
    },
    {
        id: "CFCE:A3:2C:36:33:68:11:31:AB:DC:67:BE:3C:7D:03:00:F5:73:BC:09:23:72:F1:5D:21:F8:54:58:2C:FC:3E:74",
        timestamp: 1685442202456.655,
        type: "certificate",
        base64Certificate:
            "MIIBFjCBvKADAgECAghUitPBs0RuVDAKBggqhkjOPQQDAjARMQ8wDQYDVQQDDAZXZWJSVEMwHhcNMjMwNTI5MTAyMzEyWhcNMjMwNjI5MTAyMzEyWjARMQ8wDQYDVQQDDAZXZWJSVEMwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASY7R/n7WzMx3v6bhwLpuv+XhtRAAkFOTnruyGc3oeh04OqoriE9FQ4sHm5rqD8vGah8eqHfN6g1XDgA1yEC3rnMAoGCCqGSM49BAMCA0kAMEYCIQCfgRuep47juMTV+9yUKbuqTklkbDfZ0vLw4+ySKbaWGAIhAPqYvacUo7jmH1DV7sl9mLNeTpQqpqbqsF+lbuQ83qcM",
        fingerprint: "CE:A3:2C:36:33:68:11:31:AB:DC:67:BE:3C:7D:03:00:F5:73:BC:09:23:72:F1:5D:21:F8:54:58:2C:FC:3E:74",
        fingerprintAlgorithm: "sha-256",
    },
    {
        id: "CIT01_111_minptime=10;usedtx=1;useinbandfec=1",
        timestamp: 1685442202456.655,
        type: "codec",
        channels: 2,
        clockRate: 48000,
        mimeType: "audio/opus",
        payloadType: 111,
        sdpFmtpLine: "minptime=10;usedtx=1;useinbandfec=1",
        transportId: "T01",
    },
    {
        id: "CIT01_96",
        timestamp: 1685442202456.655,
        type: "codec",
        clockRate: 90000,
        mimeType: "video/VP8",
        payloadType: 96,
        transportId: "T01",
    },
    {
        id: "COT01_111_minptime=10;usedtx=1;useinbandfec=1",
        timestamp: 1685442202456.655,
        type: "codec",
        channels: 2,
        clockRate: 48000,
        mimeType: "audio/opus",
        payloadType: 111,
        sdpFmtpLine: "minptime=10;usedtx=1;useinbandfec=1",
        transportId: "T01",
    },
    {
        id: "COT01_96",
        timestamp: 1685442202456.655,
        type: "codec",
        clockRate: 90000,
        mimeType: "video/VP8",
        payloadType: 96,
        transportId: "T01",
    },
    {
        id: "CPE/y2OM79_6JRzkx+P",
        timestamp: 1685442202456.655,
        type: "candidate-pair",
        bytesDiscardedOnSend: 0,
        bytesReceived: 11236,
        bytesSent: 26145,
        consentRequestsSent: 2,
        currentRoundTripTime: 0,
        lastPacketReceivedTimestamp: 1685442193001,
        lastPacketSentTimestamp: 1685442193019,
        localCandidateId: "IE/y2OM79",
        nominated: true,
        packetsDiscardedOnSend: 0,
        packetsReceived: 40,
        packetsSent: 55,
        priority: 9114756780654345000,
        remoteCandidateId: "I6JRzkx+P",
        requestsReceived: 3,
        requestsSent: 3,
        responsesReceived: 3,
        responsesSent: 3,
        state: "succeeded",
        totalRoundTripTime: 0,
        transportId: "T01",
        writable: true,
    },
    {
        id: "CPE/y2OM79_fG99OI7Z",
        timestamp: 1685442202456.655,
        type: "candidate-pair",
        bytesDiscardedOnSend: 0,
        bytesReceived: 0,
        bytesSent: 0,
        consentRequestsSent: 0,
        localCandidateId: "IE/y2OM79",
        nominated: false,
        packetsDiscardedOnSend: 0,
        packetsReceived: 0,
        packetsSent: 0,
        priority: 9114475305677635000,
        remoteCandidateId: "IfG99OI7Z",
        requestsReceived: 1,
        requestsSent: 0,
        responsesReceived: 0,
        responsesSent: 1,
        state: "waiting",
        totalRoundTripTime: 0,
        transportId: "T01",
        writable: false,
    },
    {
        id: "CPhz/Z/Pd/_6JRzkx+P",
        timestamp: 1685442202456.655,
        type: "candidate-pair",
        bytesDiscardedOnSend: 0,
        bytesReceived: 0,
        bytesSent: 0,
        consentRequestsSent: 0,
        currentRoundTripTime: 0.001,
        localCandidateId: "Ihz/Z/Pd/",
        nominated: false,
        packetsDiscardedOnSend: 0,
        packetsReceived: 0,
        packetsSent: 0,
        priority: 9114475305677635000,
        remoteCandidateId: "I6JRzkx+P",
        requestsReceived: 0,
        requestsSent: 1,
        responsesReceived: 1,
        responsesSent: 0,
        state: "succeeded",
        totalRoundTripTime: 0.001,
        transportId: "T01",
        writable: true,
    },
    {
        id: "CPhz/Z/Pd/_fG99OI7Z",
        timestamp: 1685442202456.655,
        type: "candidate-pair",
        bytesDiscardedOnSend: 0,
        bytesReceived: 0,
        bytesSent: 0,
        consentRequestsSent: 0,
        localCandidateId: "Ihz/Z/Pd/",
        nominated: false,
        packetsDiscardedOnSend: 0,
        packetsReceived: 0,
        packetsSent: 0,
        priority: 9114475305677503000,
        remoteCandidateId: "IfG99OI7Z",
        requestsReceived: 0,
        requestsSent: 0,
        responsesReceived: 0,
        responsesSent: 0,
        state: "waiting",
        totalRoundTripTime: 0,
        transportId: "T01",
        writable: false,
    },
    {
        id: "CPryM2UC4o_8H+/O2yO",
        timestamp: 1685442202456.655,
        type: "candidate-pair",
        availableOutgoingBitrate: 5332923,
        bytesDiscardedOnSend: 0,
        bytesReceived: 835094,
        bytesSent: 1901967,
        consentRequestsSent: 6,
        currentRoundTripTime: 0.001,
        lastPacketReceivedTimestamp: 1685442202448,
        lastPacketSentTimestamp: 1685442202431,
        localCandidateId: "IryM2UC4o",
        nominated: true,
        packetsDiscardedOnSend: 0,
        packetsReceived: 1296,
        packetsSent: 2238,
        priority: 9115049250747470000,
        remoteCandidateId: "I8H+/O2yO",
        requestsReceived: 7,
        requestsSent: 7,
        responsesReceived: 7,
        responsesSent: 7,
        state: "succeeded",
        totalRoundTripTime: 0.004,
        transportId: "T01",
        writable: true,
    },
    {
        id: "D12",
        timestamp: 1685442202456.655,
        type: "data-channel",
        bytesReceived: 0,
        bytesSent: 0,
        dataChannelIdentifier: 1,
        label: "datachannel",
        messagesReceived: 0,
        messagesSent: 0,
        protocol: "",
        state: "open",
    },
    {
        id: "I6JRzkx+P",
        timestamp: 1685442202456.655,
        type: "remote-candidate",
        address: "192.168.64.1",
        candidateType: "host",
        foundation: "2620169396",
        ip: "192.168.64.1",
        isRemote: true,
        port: 60959,
        priority: 2122194687,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "AUZN",
    },
    {
        id: "I8H+/O2yO",
        timestamp: 1685442202456.655,
        type: "remote-candidate",
        address: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        candidateType: "host",
        foundation: "3525121815",
        ip: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        isRemote: true,
        port: 50629,
        priority: 2122262783,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "AUZN",
    },
    {
        id: "IE/y2OM79",
        timestamp: 1685442202456.655,
        type: "local-candidate",
        address: "192.168.64.1",
        candidateType: "host",
        foundation: "2979504628",
        ip: "192.168.64.1",
        isRemote: false,
        networkType: "ethernet",
        port: 62639,
        priority: 2122194687,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "zBQ8",
    },
    {
        id: "IT01A195186619",
        timestamp: 1685442202456.655,
        type: "inbound-rtp",
        codecId: "CIT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        mediaType: "audio",
        ssrc: 195186619,
        transportId: "T01",
        jitter: 0,
        packetsLost: 0,
        packetsReceived: 272,
        audioLevel: 0.0012207403790398877,
        bytesReceived: 19670,
        concealedSamples: 15360,
        concealmentEvents: 1,
        estimatedPlayoutTimestamp: 3894431002370,
        fecPacketsDiscarded: 0,
        fecPacketsReceived: 0,
        headerBytesReceived: 7616,
        insertedSamplesForDeceleration: 1309,
        jitterBufferDelay: 7660.8,
        jitterBufferEmittedCount: 261120,
        jitterBufferMinimumDelay: 5702.4,
        jitterBufferTargetDelay: 5856,
        lastPacketReceivedTimestamp: 1685442202124,
        mid: "0",
        packetsDiscarded: 0,
        playoutId: "AP",
        remoteId: "ROA195186619",
        removedSamplesForAcceleration: 0,
        silentConcealedSamples: 13800,
        totalAudioEnergy: 0.0001488620375037452,
        totalSamplesDuration: 9.949999999999832,
        totalSamplesReceived: 477600,
        trackIdentifier: "f0e99682-e578-4ba4-a1f0-41a4b7ae7d01",
    },
    {
        id: "IT01V447914256",
        timestamp: 1685442202456.655,
        type: "inbound-rtp",
        codecId: "CIT01_96",
        kind: "video",
        mediaType: "video",
        ssrc: 447914256,
        transportId: "T01",
        jitter: 0.001,
        packetsLost: 0,
        packetsReceived: 832,
        bytesReceived: 751998,
        decoderImplementation: "libvpx",
        estimatedPlayoutTimestamp: 3894431002387,
        firCount: 0,
        frameHeight: 270,
        frameWidth: 480,
        framesAssembledFromMultiplePackets: 277,
        framesDecoded: 287,
        framesDropped: 0,
        framesPerSecond: 30,
        framesReceived: 287,
        freezeCount: 0,
        googTimingFrameInfo:
            "1014689708,12908278,12908292,12908294,12908294,12908294,12908278,12908278,12908294,12908294,12908298,12908299,12908309,0,1",
        headerBytesReceived: 20804,
        jitterBufferDelay: 6.355,
        jitterBufferEmittedCount: 286,
        keyFramesDecoded: 2,
        lastPacketReceivedTimestamp: 1685442202412,
        mid: "1",
        nackCount: 0,
        pauseCount: 0,
        pliCount: 0,
        powerEfficientDecoder: false,
        qpSum: 3799,
        totalAssemblyTime: 0.038318,
        totalDecodeTime: 0.15875999999999998,
        totalFreezesDuration: 0,
        totalInterFrameDelay: 9.526,
        totalPausesDuration: 0,
        totalProcessingDelay: 2.0045129999999998,
        totalSquaredInterFrameDelay: 0.325962,
        trackIdentifier: "4c93cfe8-e3bc-4c27-8614-b8c895a49118",
    },
    {
        id: "IfG99OI7Z",
        timestamp: 1685442202456.655,
        type: "remote-candidate",
        address: "192.168.178.71",
        candidateType: "host",
        foundation: "2532229949",
        ip: "192.168.178.71",
        isRemote: true,
        port: 54661,
        priority: 2122129151,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "AUZN",
    },
    {
        id: "Ihz/Z/Pd/",
        timestamp: 1685442202456.655,
        type: "local-candidate",
        address: "192.168.178.71",
        candidateType: "host",
        foundation: "3142975101",
        ip: "192.168.178.71",
        isRemote: false,
        networkType: "ethernet",
        port: 59368,
        priority: 2122129151,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "zBQ8",
    },
    {
        id: "IryM2UC4o",
        timestamp: 1685442202456.655,
        type: "local-candidate",
        address: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        candidateType: "host",
        foundation: "4289079895",
        ip: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        isRemote: false,
        networkType: "ethernet",
        port: 65502,
        priority: 2122262783,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "zBQ8",
    },
    {
        id: "OT01A958266064",
        timestamp: 1685442202456.655,
        type: "outbound-rtp",
        codecId: "COT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        mediaType: "audio",
        ssrc: 958266064,
        transportId: "T01",
        bytesSent: 17065,
        packetsSent: 272,
        active: true,
        headerBytesSent: 7616,
        mediaSourceId: "SA23",
        mid: "0",
        nackCount: 0,
        remoteId: "RIA958266064",
        retransmittedBytesSent: 0,
        retransmittedPacketsSent: 0,
        targetBitrate: 32000,
        totalPacketSendDelay: 0,
    },
    {
        id: "OT01V474891051",
        timestamp: 1685442202456.655,
        type: "outbound-rtp",
        codecId: "COT01_96",
        kind: "video",
        mediaType: "video",
        ssrc: 474891051,
        transportId: "T01",
        bytesSent: 1820653,
        packetsSent: 1821,
        active: true,
        encoderImplementation: "libvpx",
        firCount: 0,
        frameHeight: 360,
        frameWidth: 640,
        framesEncoded: 288,
        framesPerSecond: 30,
        framesSent: 288,
        headerBytesSent: 50536,
        hugeFramesSent: 0,
        keyFramesEncoded: 1,
        mediaSourceId: "SV24",
        mid: "1",
        nackCount: 0,
        pliCount: 2,
        powerEfficientEncoder: false,
        qpSum: 3895,
        qualityLimitationDurations: {
            bandwidth: 0,
            cpu: 0,
            none: 9.956,
            other: 0,
        },
        qualityLimitationReason: "none",
        qualityLimitationResolutionChanges: 0,
        remoteId: "RIV474891051",
        retransmittedBytesSent: 0,
        retransmittedPacketsSent: 0,
        scalabilityMode: "L1T1",
        targetBitrate: 1700000,
        totalEncodeTime: 0.786,
        totalEncodedBytesTarget: 0,
        totalPacketSendDelay: 0.08921899999999999,
    },
    {
        id: "P",
        timestamp: 1685442202456.655,
        type: "peer-connection",
        dataChannelsClosed: 0,
        dataChannelsOpened: 1,
    },
    {
        id: "RIA958266064",
        timestamp: 1685442198537,
        type: "remote-inbound-rtp",
        codecId: "COT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        ssrc: 958266064,
        transportId: "T01",
        jitter: 0.000125,
        packetsLost: 0,
        fractionLost: 0,
        localId: "OT01A958266064",
        roundTripTime: 0.001,
        roundTripTimeMeasurements: 2,
        totalRoundTripTime: 0.002,
    },
    {
        id: "RIV474891051",
        timestamp: 1685442201974,
        type: "remote-inbound-rtp",
        codecId: "COT01_96",
        kind: "video",
        ssrc: 474891051,
        transportId: "T01",
        jitter: 0.0013444444444444445,
        packetsLost: 0,
        fractionLost: 0,
        localId: "OT01V474891051",
        roundTripTime: 0.001,
        roundTripTimeMeasurements: 10,
        totalRoundTripTime: 0.013,
    },
    {
        id: "ROA195186619",
        timestamp: 1685442202064,
        type: "remote-outbound-rtp",
        codecId: "CIT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        ssrc: 195186619,
        transportId: "T01",
        bytesSent: 19604,
        packetsSent: 270,
        localId: "IT01A195186619",
        remoteTimestamp: 1685442202064,
        reportsSent: 3,
        roundTripTimeMeasurements: 0,
        totalRoundTripTime: 0,
    },
    {
        id: "SA23",
        timestamp: 1685442202456.655,
        type: "media-source",
        kind: "audio",
        trackIdentifier: "c9d6dc16-8f14-4e8f-865b-c25091bec7e4",
        audioLevel: 0.0013733329264198737,
        echoReturnLoss: -30,
        echoReturnLossEnhancement: 0.17551203072071075,
        totalAudioEnergy: 0.00023577541256478306,
        totalSamplesDuration: 9.949999999999832,
    },
    {
        id: "SV24",
        timestamp: 1685442202456.655,
        type: "media-source",
        kind: "video",
        trackIdentifier: "9ae8f8bc-f13e-4cfa-9c63-8d17fa132992",
        frames: 299,
        framesPerSecond: 31,
        height: 360,
        width: 640,
    },
    {
        id: "T01",
        timestamp: 1685442202456.655,
        type: "transport",
        bytesReceived: 846330,
        bytesSent: 1928112,
        dtlsCipher: "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
        dtlsRole: "client",
        dtlsState: "connected",
        iceLocalUsernameFragment: "zBQ8",
        iceRole: "controlled",
        iceState: "connected",
        localCertificateId:
            "CF8D:03:B2:A8:7F:FE:52:60:98:42:3F:F1:A3:61:89:CD:B2:39:0E:17:F7:AE:57:79:5F:96:6F:41:E8:DA:CB:2D",
        packetsReceived: 1336,
        packetsSent: 2293,
        remoteCertificateId:
            "CFCE:A3:2C:36:33:68:11:31:AB:DC:67:BE:3C:7D:03:00:F5:73:BC:09:23:72:F1:5D:21:F8:54:58:2C:FC:3E:74",
        selectedCandidatePairChanges: 4,
        selectedCandidatePairId: "CPryM2UC4o_8H+/O2yO",
        srtpCipher: "AES_CM_128_HMAC_SHA1_80",
        tlsVersion: "FEFD",
    },
];

export const currentChromeReport = [
    {
        id: "AP",
        timestamp: 1685442212456.4521,
        type: "media-playout",
        kind: "audio",
        synthesizedSamplesDuration: 0,
        synthesizedSamplesEvents: 0,
        totalPlayoutDelay: 22455.74544,
        totalSamplesCount: 957600,
        totalSamplesDuration: 19.95,
    },
    {
        id: "CF8D:03:B2:A8:7F:FE:52:60:98:42:3F:F1:A3:61:89:CD:B2:39:0E:17:F7:AE:57:79:5F:96:6F:41:E8:DA:CB:2D",
        timestamp: 1685442212456.4521,
        type: "certificate",
        base64Certificate:
            "MIIBFjCBvKADAgECAggGFX25uzXk/jAKBggqhkjOPQQDAjARMQ8wDQYDVQQDDAZXZWJSVEMwHhcNMjMwNTI5MTAyMzEyWhcNMjMwNjI5MTAyMzEyWjARMQ8wDQYDVQQDDAZXZWJSVEMwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATICxbNzVNS8Z+SEntEKIYTryX5Ib0Fglm9Z8+nqsgiLOPOKPz+tc/dzE/55de4VQXJIJrO+wJ/c+JCOfp3sqlSMAoGCCqGSM49BAMCA0kAMEYCIQCZ95K1ot41YP/3Q4cURKDjHcYkBcAVkHBupmnWxVY+LQIhAKQwE43fZLYiEBG+AvFjj2sicilsEZ6r71E61YYZmYqz",
        fingerprint: "8D:03:B2:A8:7F:FE:52:60:98:42:3F:F1:A3:61:89:CD:B2:39:0E:17:F7:AE:57:79:5F:96:6F:41:E8:DA:CB:2D",
        fingerprintAlgorithm: "sha-256",
    },
    {
        id: "CFCE:A3:2C:36:33:68:11:31:AB:DC:67:BE:3C:7D:03:00:F5:73:BC:09:23:72:F1:5D:21:F8:54:58:2C:FC:3E:74",
        timestamp: 1685442212456.4521,
        type: "certificate",
        base64Certificate:
            "MIIBFjCBvKADAgECAghUitPBs0RuVDAKBggqhkjOPQQDAjARMQ8wDQYDVQQDDAZXZWJSVEMwHhcNMjMwNTI5MTAyMzEyWhcNMjMwNjI5MTAyMzEyWjARMQ8wDQYDVQQDDAZXZWJSVEMwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASY7R/n7WzMx3v6bhwLpuv+XhtRAAkFOTnruyGc3oeh04OqoriE9FQ4sHm5rqD8vGah8eqHfN6g1XDgA1yEC3rnMAoGCCqGSM49BAMCA0kAMEYCIQCfgRuep47juMTV+9yUKbuqTklkbDfZ0vLw4+ySKbaWGAIhAPqYvacUo7jmH1DV7sl9mLNeTpQqpqbqsF+lbuQ83qcM",
        fingerprint: "CE:A3:2C:36:33:68:11:31:AB:DC:67:BE:3C:7D:03:00:F5:73:BC:09:23:72:F1:5D:21:F8:54:58:2C:FC:3E:74",
        fingerprintAlgorithm: "sha-256",
    },
    {
        id: "CIT01_111_minptime=10;usedtx=1;useinbandfec=1",
        timestamp: 1685442212456.4521,
        type: "codec",
        channels: 2,
        clockRate: 48000,
        mimeType: "audio/opus",
        payloadType: 111,
        sdpFmtpLine: "minptime=10;usedtx=1;useinbandfec=1",
        transportId: "T01",
    },
    {
        id: "CIT01_96",
        timestamp: 1685442212456.4521,
        type: "codec",
        clockRate: 90000,
        mimeType: "video/VP8",
        payloadType: 96,
        transportId: "T01",
    },
    {
        id: "COT01_111_minptime=10;usedtx=1;useinbandfec=1",
        timestamp: 1685442212456.4521,
        type: "codec",
        channels: 2,
        clockRate: 48000,
        mimeType: "audio/opus",
        payloadType: 111,
        sdpFmtpLine: "minptime=10;usedtx=1;useinbandfec=1",
        transportId: "T01",
    },
    {
        id: "COT01_96",
        timestamp: 1685442212456.4521,
        type: "codec",
        clockRate: 90000,
        mimeType: "video/VP8",
        payloadType: 96,
        transportId: "T01",
    },
    {
        id: "CPE/y2OM79_6JRzkx+P",
        timestamp: 1685442212456.4521,
        type: "candidate-pair",
        bytesDiscardedOnSend: 0,
        bytesReceived: 11236,
        bytesSent: 26145,
        consentRequestsSent: 2,
        currentRoundTripTime: 0,
        lastPacketReceivedTimestamp: 1685442193001,
        lastPacketSentTimestamp: 1685442193019,
        localCandidateId: "IE/y2OM79",
        nominated: true,
        packetsDiscardedOnSend: 0,
        packetsReceived: 40,
        packetsSent: 55,
        priority: 9114756780654345000,
        remoteCandidateId: "I6JRzkx+P",
        requestsReceived: 3,
        requestsSent: 3,
        responsesReceived: 3,
        responsesSent: 3,
        state: "succeeded",
        totalRoundTripTime: 0,
        transportId: "T01",
        writable: true,
    },
    {
        id: "CPE/y2OM79_fG99OI7Z",
        timestamp: 1685442212456.4521,
        type: "candidate-pair",
        bytesDiscardedOnSend: 0,
        bytesReceived: 0,
        bytesSent: 0,
        consentRequestsSent: 0,
        localCandidateId: "IE/y2OM79",
        nominated: false,
        packetsDiscardedOnSend: 0,
        packetsReceived: 0,
        packetsSent: 0,
        priority: 9114475305677635000,
        remoteCandidateId: "IfG99OI7Z",
        requestsReceived: 1,
        requestsSent: 0,
        responsesReceived: 0,
        responsesSent: 1,
        state: "waiting",
        totalRoundTripTime: 0,
        transportId: "T01",
        writable: false,
    },
    {
        id: "CPhz/Z/Pd/_6JRzkx+P",
        timestamp: 1685442212456.4521,
        type: "candidate-pair",
        bytesDiscardedOnSend: 0,
        bytesReceived: 0,
        bytesSent: 0,
        consentRequestsSent: 0,
        currentRoundTripTime: 0.001,
        localCandidateId: "Ihz/Z/Pd/",
        nominated: false,
        packetsDiscardedOnSend: 0,
        packetsReceived: 0,
        packetsSent: 0,
        priority: 9114475305677635000,
        remoteCandidateId: "I6JRzkx+P",
        requestsReceived: 0,
        requestsSent: 1,
        responsesReceived: 1,
        responsesSent: 0,
        state: "succeeded",
        totalRoundTripTime: 0.001,
        transportId: "T01",
        writable: true,
    },
    {
        id: "CPryM2UC4o_8H+/O2yO",
        timestamp: 1685442212456.4521,
        type: "candidate-pair",
        availableOutgoingBitrate: 5332923,
        bytesDiscardedOnSend: 0,
        bytesReceived: 2963285,
        bytesSent: 4140357,
        consentRequestsSent: 10,
        currentRoundTripTime: 0,
        lastPacketReceivedTimestamp: 1685442212451,
        lastPacketSentTimestamp: 1685442212450,
        localCandidateId: "IryM2UC4o",
        nominated: true,
        packetsDiscardedOnSend: 0,
        packetsReceived: 3708,
        packetsSent: 4734,
        priority: 9115049250747470000,
        remoteCandidateId: "I8H+/O2yO",
        requestsReceived: 11,
        requestsSent: 11,
        responsesReceived: 11,
        responsesSent: 11,
        state: "succeeded",
        totalRoundTripTime: 0.005,
        transportId: "T01",
        writable: true,
    },
    {
        id: "D12",
        timestamp: 1685442212456.4521,
        type: "data-channel",
        bytesReceived: 0,
        bytesSent: 0,
        dataChannelIdentifier: 1,
        label: "datachannel",
        messagesReceived: 0,
        messagesSent: 0,
        protocol: "",
        state: "open",
    },
    {
        id: "I6JRzkx+P",
        timestamp: 1685442212456.4521,
        type: "remote-candidate",
        address: "192.168.64.1",
        candidateType: "host",
        foundation: "2620169396",
        ip: "192.168.64.1",
        isRemote: true,
        port: 60959,
        priority: 2122194687,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "AUZN",
    },
    {
        id: "I8H+/O2yO",
        timestamp: 1685442212456.4521,
        type: "remote-candidate",
        address: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        candidateType: "host",
        foundation: "3525121815",
        ip: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        isRemote: true,
        port: 50629,
        priority: 2122262783,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "AUZN",
    },
    {
        id: "IE/y2OM79",
        timestamp: 1685442212456.4521,
        type: "local-candidate",
        address: "192.168.64.1",
        candidateType: "host",
        foundation: "2979504628",
        ip: "192.168.64.1",
        isRemote: false,
        networkType: "ethernet",
        port: 62639,
        priority: 2122194687,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "zBQ8",
    },
    {
        id: "IT01A195186619",
        timestamp: 1685442212456.4521,
        type: "inbound-rtp",
        codecId: "CIT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        mediaType: "audio",
        ssrc: 195186619,
        transportId: "T01",
        jitter: 0,
        packetsLost: 0,
        packetsReceived: 499,
        audioLevel: 0.0009765923032319102,
        bytesReceived: 33941,
        concealedSamples: 15360,
        concealmentEvents: 1,
        estimatedPlayoutTimestamp: 3894431012370,
        fecPacketsDiscarded: 0,
        fecPacketsReceived: 0,
        headerBytesReceived: 13972,
        insertedSamplesForDeceleration: 1309,
        jitterBufferDelay: 14198.4,
        jitterBufferEmittedCount: 479040,
        jitterBufferMinimumDelay: 10060.8,
        jitterBufferTargetDelay: 10214.4,
        lastPacketReceivedTimestamp: 1685442212144,
        mid: "0",
        packetsDiscarded: 0,
        playoutId: "AP",
        remoteId: "ROA195186619",
        removedSamplesForAcceleration: 0,
        silentConcealedSamples: 13800,
        totalAudioEnergy: 0.007086603036643953,
        totalSamplesDuration: 19.95000000000032,
        totalSamplesReceived: 957600,
        trackIdentifier: "f0e99682-e578-4ba4-a1f0-41a4b7ae7d01",
    },
    {
        id: "IT01V447914256",
        timestamp: 1685442212456.4521,
        type: "inbound-rtp",
        codecId: "CIT01_96",
        kind: "video",
        mediaType: "video",
        ssrc: 447914256,
        transportId: "T01",
        jitter: 0.001,
        packetsLost: 0,
        packetsReceived: 2812,
        bytesReceived: 2777554,
        decoderImplementation: "libvpx",
        estimatedPlayoutTimestamp: 3894431012385,
        firCount: 0,
        frameHeight: 360,
        frameWidth: 640,
        framesAssembledFromMultiplePackets: 574,
        framesDecoded: 586,
        framesDropped: 0,
        framesPerSecond: 30,
        framesReceived: 587,
        freezeCount: 0,
        googTimingFrameInfo:
            "1015557128,12917915,12917921,12917923,12917923,12917924,12917915,12917915,12917924,12917924,12917939,12917940,12917951,0,1",
        headerBytesReceived: 69144,
        jitterBufferDelay: 13.732,
        jitterBufferEmittedCount: 585,
        keyFramesDecoded: 3,
        lastPacketReceivedTimestamp: 1685442212416,
        mid: "1",
        nackCount: 0,
        pauseCount: 0,
        pliCount: 0,
        powerEfficientDecoder: false,
        qpSum: 6594,
        totalAssemblyTime: 0.064493,
        totalDecodeTime: 0.534748,
        totalFreezesDuration: 0,
        totalInterFrameDelay: 19.496,
        totalPausesDuration: 0,
        totalProcessingDelay: 4.843700999999999,
        totalSquaredInterFrameDelay: 0.6692820000000006,
        trackIdentifier: "4c93cfe8-e3bc-4c27-8614-b8c895a49118",
    },
    {
        id: "IfG99OI7Z",
        timestamp: 1685442212456.4521,
        type: "remote-candidate",
        address: "192.168.178.71",
        candidateType: "host",
        foundation: "2532229949",
        ip: "192.168.178.71",
        isRemote: true,
        port: 54661,
        priority: 2122129151,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "AUZN",
    },
    {
        id: "Ihz/Z/Pd/",
        timestamp: 1685442212456.4521,
        type: "local-candidate",
        address: "192.168.178.71",
        candidateType: "host",
        foundation: "3142975101",
        ip: "192.168.178.71",
        isRemote: false,
        networkType: "ethernet",
        port: 59368,
        priority: 2122129151,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "zBQ8",
    },
    {
        id: "IryM2UC4o",
        timestamp: 1685442212456.4521,
        type: "local-candidate",
        address: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        candidateType: "host",
        foundation: "4289079895",
        ip: "aaaa:1111:aaaa:111:aaaa:1111:1111:aaa",
        isRemote: false,
        networkType: "ethernet",
        port: 65502,
        priority: 2122262783,
        protocol: "udp",
        transportId: "T01",
        usernameFragment: "zBQ8",
    },
    {
        id: "OT01A958266064",
        timestamp: 1685442212456.4521,
        type: "outbound-rtp",
        codecId: "COT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        mediaType: "audio",
        ssrc: 958266064,
        transportId: "T01",
        bytesSent: 31336,
        packetsSent: 499,
        active: true,
        headerBytesSent: 13972,
        mediaSourceId: "SA23",
        mid: "0",
        nackCount: 0,
        remoteId: "RIA958266064",
        retransmittedBytesSent: 0,
        retransmittedPacketsSent: 0,
        targetBitrate: 32000,
        totalPacketSendDelay: 0,
    },
    {
        id: "OT01V474891051",
        timestamp: 1685442212456.4521,
        type: "outbound-rtp",
        codecId: "COT01_96",
        kind: "video",
        mediaType: "video",
        ssrc: 474891051,
        transportId: "T01",
        bytesSent: 3953856,
        packetsSent: 3889,
        active: true,
        encoderImplementation: "libvpx",
        firCount: 0,
        frameHeight: 360,
        frameWidth: 640,
        framesEncoded: 588,
        framesPerSecond: 30,
        framesSent: 588,
        headerBytesSent: 100920,
        hugeFramesSent: 0,
        keyFramesEncoded: 1,
        mediaSourceId: "SV24",
        mid: "1",
        nackCount: 0,
        pliCount: 2,
        powerEfficientEncoder: false,
        qpSum: 6657,
        qualityLimitationDurations: {
            bandwidth: 0,
            cpu: 0,
            none: 19.956,
            other: 0,
        },
        qualityLimitationReason: "none",
        qualityLimitationResolutionChanges: 0,
        remoteId: "RIV474891051",
        retransmittedBytesSent: 0,
        retransmittedPacketsSent: 0,
        scalabilityMode: "L1T1",
        targetBitrate: 1700000,
        totalEncodeTime: 1.557,
        totalEncodedBytesTarget: 0,
        totalPacketSendDelay: 0.090407,
    },
    {
        id: "P",
        timestamp: 1685442212456.4521,
        type: "peer-connection",
        dataChannelsClosed: 0,
        dataChannelsOpened: 1,
    },
    {
        id: "RIA958266064",
        timestamp: 1685442205897,
        type: "remote-inbound-rtp",
        codecId: "COT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        ssrc: 958266064,
        transportId: "T01",
        jitter: 0,
        packetsLost: 0,
        fractionLost: 0,
        localId: "OT01A958266064",
        roundTripTime: 0.001,
        roundTripTimeMeasurements: 3,
        totalRoundTripTime: 0.003,
    },
    {
        id: "RIV474891051",
        timestamp: 1685442211724,
        type: "remote-inbound-rtp",
        codecId: "COT01_96",
        kind: "video",
        ssrc: 474891051,
        transportId: "T01",
        jitter: 0.0013,
        packetsLost: 0,
        fractionLost: 0,
        localId: "OT01V474891051",
        roundTripTime: 0.001,
        roundTripTimeMeasurements: 20,
        totalRoundTripTime: 0.023,
    },
    {
        id: "ROA195186619",
        timestamp: 1685442210064,
        type: "remote-outbound-rtp",
        codecId: "CIT01_111_minptime=10;usedtx=1;useinbandfec=1",
        kind: "audio",
        ssrc: 195186619,
        transportId: "T01",
        bytesSent: 31570,
        packetsSent: 460,
        localId: "IT01A195186619",
        remoteTimestamp: 1685442210064,
        reportsSent: 5,
        roundTripTimeMeasurements: 0,
        totalRoundTripTime: 0,
    },
    {
        id: "SA23",
        timestamp: 1685442212456.4521,
        type: "media-source",
        kind: "audio",
        trackIdentifier: "c9d6dc16-8f14-4e8f-865b-c25091bec7e4",
        audioLevel: 0.0017090365306558428,
        echoReturnLoss: -30,
        echoReturnLossEnhancement: 0.17551203072071075,
        totalAudioEnergy: 0.011151931473826194,
        totalSamplesDuration: 19.95000000000032,
    },
    {
        id: "SV24",
        timestamp: 1685442212456.4521,
        type: "media-source",
        kind: "video",
        trackIdentifier: "9ae8f8bc-f13e-4cfa-9c63-8d17fa132992",
        frames: 599,
        framesPerSecond: 31,
        height: 360,
        width: 640,
    },
    {
        id: "T01",
        timestamp: 1685442212456.4521,
        type: "transport",
        bytesReceived: 2974521,
        bytesSent: 4166502,
        dtlsCipher: "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
        dtlsRole: "client",
        dtlsState: "connected",
        iceLocalUsernameFragment: "zBQ8",
        iceRole: "controlled",
        iceState: "connected",
        localCertificateId:
            "CF8D:03:B2:A8:7F:FE:52:60:98:42:3F:F1:A3:61:89:CD:B2:39:0E:17:F7:AE:57:79:5F:96:6F:41:E8:DA:CB:2D",
        packetsReceived: 3748,
        packetsSent: 4789,
        remoteCertificateId:
            "CFCE:A3:2C:36:33:68:11:31:AB:DC:67:BE:3C:7D:03:00:F5:73:BC:09:23:72:F1:5D:21:F8:54:58:2C:FC:3E:74",
        selectedCandidatePairChanges: 4,
        selectedCandidatePairId: "CPryM2UC4o_8H+/O2yO",
        srtpCipher: "AES_CM_128_HMAC_SHA1_80",
        tlsVersion: "FEFD",
    },
];
