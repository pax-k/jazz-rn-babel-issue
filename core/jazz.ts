import { createJazzReactApp } from "jazz-react";

export { DemoAuthBasicUI, useDemoAuth } from "jazz-react";
export const Jazz = createJazzReactApp();
export const { useAccount, useCoState, useAcceptInvite } = Jazz;
