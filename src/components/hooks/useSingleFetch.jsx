import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

const useSingleFetch = (collectionName, id, subCol) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getSingleData = () => {
      const postRef = query(collection(db, collectionName, id, subCol));
      onSnapshot(postRef, (snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
        setLoading(false);
      });
    };
    getSingleData();
  }, [db, id]);
  return {
    data,
    loading,
  };
};

export default useSingleFetch;
