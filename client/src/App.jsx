import React, { useEffect, useMemo } from 'react';
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
  const students = useStudentStore((state) => state.students);
  const isLoading = useStudentStore((state) => state.isLoading);
  const error = useStudentStore((state) => state.error);
  const searchTerm = useStudentStore((state) => state.searchTerm);
  const setSearchTerm = useStudentStore((state) => state.setSearchTerm);
  const fetchStudents = useStudentStore((state) => state.fetchStudents);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="5xl">
        <Heading mb={2} textAlign="center">
          Student Database Viewer
        </Heading>
        <Text mb={6} textAlign="center" color="gray.600">
          Data is coming from a Neon PostgreSQL database through an API. Your
          job: use React hooks, Zustand, and Chakra tables to display and filter
          it.
        </Text>

        <Box mb={4}>
          <Input
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="white"
          />
        </Box>

        {isLoading && (
          <Box textAlign="center" mt={10}>
            <Spinner size="xl" />
            <Text mt={2}>Loading students...</Text>
          </Box>
        )}

        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        {!isLoading && !error && (
          <StudentsTable students={filteredStudents} />
        )}
      </Container>
    </Box>
  );
}

export default App;
