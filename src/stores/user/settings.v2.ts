import { defineStore } from "pinia";
import { doc, getFirestore } from "firebase/firestore";
import { useFirestore } from "@vueuse/firebase";
import { useFirebaseStore } from "../firebase";

export type Settings = {
  gratitude: boolean;
  moon: boolean;
  weather: boolean;
  customChecklist: string[];
};

export const useUserSettingsV2Store = defineStore("userSettingsV2", () => {
  const { firebaseApp } = useFirebaseStore();
  const db = getFirestore(firebaseApp);
  const user = useFirestore(doc(db, "wip", "marco"));

  const saveSettings = async () => {
    user.value = {
      settings: {
        gratitude: true,
        moon: true,
        weather: true,
        customChecklist: ["Buy groceries", "Buy groceries", "Buy groceries"],
      },
    };
    console.log("user.value : ", user.value);
  };

  return {
    saveSettings,
  };
});
