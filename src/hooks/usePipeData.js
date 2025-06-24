import { useState, useEffect } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import db from '../firebase';

const COLLECTION = 'pipeStock';

export default function usePipeData() {
  const [pipeData, setPipeData] = useState({});
  const [loading, setLoading] = useState(true);

  // Load data from Firestore on app load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, COLLECTION));
        const data = {};
        snapshot.forEach(doc => {
          data[doc.id] = doc.data();
        });
        setPipeData(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch Firestore data", err);
      }
    };
    fetchData();
  }, []);

  // Save data to Firestore
  const savePipe = async (pipeKey, pipeEntry) => {
    try {
      await setDoc(doc(db, COLLECTION, pipeKey), pipeEntry);
      setPipeData(prev => ({ ...prev, [pipeKey]: pipeEntry }));
    } catch (err) {
      console.error("Failed to save pipe entry", err);
    }
  };

  return { pipeData, setPipeData, savePipe, loading };
}
