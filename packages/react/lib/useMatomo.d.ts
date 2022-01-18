import { TrackEventParams, TrackLinkParams, TrackSiteSearchParams } from './types';
declare function useMatomo(): {
    enableLinkTracking: () => void;
    enableTracking: () => void;
    pushInstruction: (name: string, ...args: any[]) => void;
    trackEvent: (params: TrackEventParams) => void | undefined;
    trackEvents: () => void | undefined;
    trackLink: (params: TrackLinkParams) => void | undefined;
    trackPageView: (params?: import("packages/js/lib/types").TrackPageViewParams | undefined) => void | undefined;
    trackSiteSearch: (params: TrackSiteSearchParams) => void | undefined;
};
export default useMatomo;
//# sourceMappingURL=useMatomo.d.ts.map