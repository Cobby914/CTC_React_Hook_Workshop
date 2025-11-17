import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

/**
 * Props:
 * - students: an array of student/member objects
 *
 * Each student has at least:
 * - id
 * - name
 * - email
 * - year_of_study
 * - role
 */
function StudentsTable({ students }) {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="purple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Year of Study</Th>
            <Th>Role</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* ============================
              TODO 5: Render table rows
              - Use students.map(...)

             ============================ */}

          {// Example structure (remove after you implement the real one):

          }
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default StudentsTable;
