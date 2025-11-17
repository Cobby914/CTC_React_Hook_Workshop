import { create } from 'zustand';
import axios from 'axios';

export const useStudentStore = create((set) => ({
  students: [],
  isLoading: false,
  error: null,
  searchTerm: '',
  setSearchTerm: (value) => set({ searchTerm: value }),

  fetchStudents: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get('http://localhost:4000/api/students');
      set({ students: response.data });
    } catch (err) {
      console.error(err);
      set({ error: 'Something went wrong while loading students.' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
