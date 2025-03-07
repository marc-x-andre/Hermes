import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase";
import { getFirestore, doc } from "firebase/firestore";
import { useAuthStore } from "./auth";

export const useFirestoreStore = defineStore("firestore", () => {
  const { firebaseApp } = useFirebaseStore();
  const { userData } = useAuthStore();
  const firestore = getFirestore(firebaseApp);

  const getSettingsDoc = () => {
    return doc(firestore, "users", `${userData?.email}`);
  };

  return {
    firestore,
    getSettingsDoc,
  };
});
