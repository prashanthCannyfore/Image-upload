import * as Yup from 'yup';

const personalInfoSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const employmentSchema = Yup.object({
  isEmployed: Yup.boolean().required('Employment status is required'),
  companyName: Yup.string().when('isEmployed', {
    is: true,
    then: Yup.string().required('Company name is required'),
    otherwise: Yup.string().notRequired(),
  }),
});

const documentSchema = Yup.object({
  resume: Yup.mixed().required('Resume is required'),
});

export const validationSchemas = {
  1: personalInfoSchema,
  2: employmentSchema,
  3: documentSchema,
};
