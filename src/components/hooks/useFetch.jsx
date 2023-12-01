import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

const useFetch = (collectionName) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDatas = async () => {
      const postRef = query(
        collection(db, collectionName),
        orderBy("created", "desc")
      );
      const snapshot = await getDocs(postRef);

      const postData = await Promise.all(
        snapshot.docs.map(async (docs) => {
          const postItems = { ...docs.data(), id: docs.id };
          const ref = doc(db, "users", postItems?.userId);
          const getUser = await getDoc(ref);

          if (getUser.exists()) {
            const userData = getUser.data();
            return { ...postItems, ...userData };
          }
        })
      );
      setData(postData);
      setLoading(false);
    };
    getDatas();
  }, [collectionName]);
  return {
    data,
    loading,
  };
};

export default useFetch;
