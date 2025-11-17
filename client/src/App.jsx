import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  Input,
} from '@chakra-ui/react';
import { useStudentStore } from './store/useStudentStore';
import StudentsTable from './components/StudentsTable';

function App() {
  // ============================
  // TODO 1: Get state from the Zustand store
  // Replace the placeholder lines below with real values from useStudentStore.
  // ============================

  // Placeholder values so the app runs before you do TODO 1:
  const { } = useStudentStore();

  // ============================
  // TODO 2: Fetch data on page load
  // Use useEffect to call fetchStudents() once when the component mounts.
 
  useEffect(() => {
    // TODO 2: call fetchStudents() here
  }, [fetchStudents]);

  // ============================
  // TODO 3: Filter students by name using searchTerm
  // Create a new array that only includes students whose name
  // contains the searchTerm (case-insensitive).
  // ============================
  const filteredStudents = students; // TODO 3: replace with filtered array

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="5xl">
        <Heading mb={2} textAlign="center">
          Student / Member Database Viewer
        </Heading>
        <Text mb={6} textAlign="center" color="gray.600">
          Data is coming from a Neon PostgreSQL database through an API.
          Your job: use React hooks, Zustand, and Chakra tables to display and filter it.
        </Text>

        {/* ============================
            TODO 4: Make this a working search input
            - Its value should be the searchTerm from the store.
            - onChange should call setSearchTerm with the new value.
           ============================ */}
        <Box mb={4}>
          <Input
            placeholder="Search by name..."
            value={searchTerm} // TODO 4: bind to Zustand searchTerm
            onChange={(e) => {
              // TODO 4
            }}
            bg="white"
          />
        </Box>

        {/* Loading state */}
        {isLoading && (
          <Box textAlign="center" mt={10}>
            <Spinner size="xl" />
            <Text mt={2}>Loading students...</Text>
          </Box>
        )}

        {/* Error state */}
        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        {/* Table (only show when not loading and no error) */}
        {!isLoading && !error && (
          <StudentsTable students={filteredStudents} />
        )}
      </Container>
    </Box>
  );
}

export default App;
