import React, { useState } from 'react';
import {
  Box,
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Progress,
} from '@chakra-ui/react';

// Create a component for each step in the form
function StepOne({ onNext, formData, setFormData }) {
  // Step one form fields
  return (
    <FormControl>
      <FormLabel>Your need</FormLabel>
      {/* Radio buttons and other inputs */}
      <Button onClick={onNext}>Next</Button>
    </FormControl>
  );
}

function StepTwo({ onPrev, onNext, formData, setFormData }) {
  // Step two form fields
  return (
    <FormControl>
      <FormLabel>Your housing</FormLabel>
      {/* Radio buttons and other inputs */}
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </FormControl>
  );
}

// Repeat for the rest of the steps...

// Main form component that manages the steps
function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Render the current step component based on currentStep state
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepTwo onPrev={prevStep} onNext={nextStep} formData={formData} setFormData={setFormData} />;
      // Repeat for the rest of the steps...
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

export default MultiStepForm;
