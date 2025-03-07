import { defineStore } from "pinia";
import { getDoc, setDoc } from "firebase/firestore";
import { useFirestore } from "@vueuse/firebase";
import { useFirestoreStore } from "../firestore";

export type Settings = {
  gratitude: boolean;
  moon: boolean;
  weather: boolean;
  customChecklist: string[];
};

export const useSettingsStore = defineStore("settings", () => {
  const { getSettingsDoc } = useFirestoreStore();
  const settingsQuery = getSettingsDoc();
  const settings = useFirestore(settingsQuery);

  const fetchSettings = async () => {
    const querySnapshot = await getDoc(settingsQuery);
    settings.value = querySnapshot.data() as Settings;
  };

  const saveSettings = async (newSettings: Partial<Settings>) => {
    const newValue = { ...settings.value, ...newSettings };
    await setDoc(settingsQuery, newValue);
    settings.value = newValue;
  };

  return {
    settings,
    fetchSettings,
    saveSettings,
  };
});
