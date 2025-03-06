import { defineStore } from "pinia";
import { useFirestoreStore } from "../firestore";
import { addDoc, getDocs } from "firebase/firestore";
import { ref } from "vue";

export type Settings = {
  gratitude: boolean;
  moon: boolean;
  weather: boolean;
  customChecklist: string[];
};

export const useUserSettingsStore = defineStore("userSettings", () => {
  const { getSettingsCol } = useFirestoreStore();

  const settings = ref<Settings | undefined>(undefined);
  console.log("useFirestoreStore() : ", useFirestoreStore());
  const fetchSettings = async () => {
    const querySnapshot = await getDocs(getSettingsCol());
    if (querySnapshot.docs[0]) {
      settings.value = querySnapshot.docs[0].data() as Settings;
    }
    console.log("Column settings fetch : ", querySnapshot.docs);
  };

  const saveSettings = async (newSettings: Settings) => {
    const docRef = await addDoc(getSettingsCol(), newSettings);
    console.log("Document written with ID: ", docRef.id);
    settings.value = newSettings;
  };

  return {
    settings,
    fetchSettings,
    saveSettings,
  };
});
