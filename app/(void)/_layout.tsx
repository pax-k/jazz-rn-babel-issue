import { DemoAuthBasicUI, Jazz, useDemoAuth } from "@/core/jazz";
import { Slot, useNavigationContainerRef } from "expo-router";
import { useState } from "react";
import { Platform } from "react-native";

export default function VoidLayout() {
  const [auth, state] = useDemoAuth();

  if (!auth) {
    return null;
  }

  return (
    <>
      <Jazz.Provider
        auth={auth}
        peer="wss://cloud.jazz.tools/?key=hey@jazz-rn-babel-issue.com"
        storage={Platform.select({
          native: undefined,
          web: "singleTabOPFS",
        })}
      >
        <Slot />
      </Jazz.Provider>
      {state.state !== "signedIn" ? (
        <DemoAuthBasicUI appName="Jazz Chat" state={state} />
      ) : null}
    </>
  );
}
