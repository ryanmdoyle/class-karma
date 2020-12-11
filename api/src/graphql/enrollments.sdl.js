export const schema = gql`
  type Enrollment {
    id: String!
    user: User!
    userId: String!
    group: Group!
    groupId: String!
  }

  type Query {
    enrollments: [Enrollment!]!
    enrollment(id: String!): Enrollment
    # Custom
    enrollmentsOfGroup(groupId: String!): [Enrollment!]!
    enrollmentsOfStudents: [Enrollment!]!
  }

  input CreateEnrollmentInput {
    userId: String!
    groupId: String!
  }

  input UpdateEnrollmentInput {
    userId: String
    groupId: String
  }

  type Mutation {
    createEnrollment(input: CreateEnrollmentInput!): Enrollment!
    updateEnrollment(id: String!, input: UpdateEnrollmentInput!): Enrollment!
    deleteEnrollment(id: String!): Enrollment!
  }
`
