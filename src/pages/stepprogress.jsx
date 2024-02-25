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
import FormComponent1 from './../components/stepprogress/FormComponent1'; 
import FormComponent2 from './../components/stepprogress/FormComponent2';
import FormComponent3 from './../components/stepprogress/FormComponent3';
import FormComponent4 from './../components/stepprogress/FormComponent4';


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
      <FormLabel>Votre logement</FormLabel>
      <FormComponent2 formData={formData} setFormData={setFormData} />
      <Button onClick={onPrev}>Précédent</Button>
      <Button onClick={onNext}>Suivant</Button>
    </FormControl>
  );
}

function StepThree({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Votre situation</FormLabel>
      <FormComponent3 formData={formData} setFormData={setFormData} />
      <Button onClick={onPrev}>Précédent</Button>
      <Button onClick={onNext}>Suivant</Button>
    </FormControl>
  );
}

function StepFour({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Vos travaux</FormLabel>
      <FormComponent4 formData={formData} setFormData={setFormData} />
      <Button onClick={onPrev}>Précédent</Button>
      <Button onClick={onNext}>Suivant</Button>
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
