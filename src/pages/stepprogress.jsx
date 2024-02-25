import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Progress,
} from '@chakra-ui/react';
import FormComponent1 from './../components/stepprogress/FormComponent1'; // Assuming FormComponent1 is in the same directory

// ... (Other Steps code)

function StepOne({ onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Your need</FormLabel>
      {/* Include FormComponent1 here and pass formData and setFormData */}
      <FormComponent1 formData={formData} setFormData={setFormData} />
      <Button onClick={onNext}>Next</Button>
    </FormControl>
  );
}

function StepTwo({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Your housing</FormLabel>
      {/* Add your form fields here */}
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </FormControl>
  );
}

function StepThree({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Your budget</FormLabel>
      {/* Add your form fields here */}
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </FormControl>
  );
}

function StepFour({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Your preferences</FormLabel>
      {/* Add your form fields here */}
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </FormControl>
  );
}

function StepFive({ onPrev, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Review & Submit</FormLabel>
      {/* Display a summary of the formData for review */}
      <Button onClick={onPrev}>Previous</Button>
      <Button
        onClick={() => {
          // Submit formData logic
          console.log(formData);
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
}

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepTwo onPrev={prevStep} onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 3:
        return <StepThree onPrev={prevStep} onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 4:
        return <StepFour onPrev={prevStep} onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 5:
        return <StepFive onPrev={prevStep} formData={formData} setFormData={setFormData} />;
      default:
        return <StepOne onNext={nextStep} formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Box>
      <Progress value={(currentStep / 5) * 100} />
      <Heading as="h3" size="lg">Find the help suited to your needs</Heading>
      <Stack spacing={4}>
        {renderStep()}
      </Stack>
    </Box>
  );
}

export default MultiStepForm
