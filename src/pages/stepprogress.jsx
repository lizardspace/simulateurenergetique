import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Progress,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import FormComponent1 from './../components/stepprogress/FormComponent1'; 
import FormComponent2 from './../components/stepprogress/FormComponent2';
import FormComponent3 from './../components/stepprogress/FormComponent3';
import FormComponent4 from './../components/stepprogress/FormComponent4';


function StepOne({ onNext, formData, setFormData }) {
  return (
    <FormControl textAlign="center">
      <FormLabel textAlign="center">Vos besoins</FormLabel>
      <FormComponent1 formData={formData} setFormData={setFormData} />
      <Flex justify="space-between">
        <Spacer /> 
        <Button colorScheme="blue" onClick={onNext}>Suivant</Button> {/* Blue button */}
      </Flex>
    </FormControl>
  );
}

function StepTwo({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel textAlign="center">Votre logement</FormLabel>
      <FormComponent2 formData={formData} setFormData={setFormData} />
      <Flex justify="space-between">
        <Button colorScheme="blue" onClick={onPrev}>Précédent</Button> {/* Blue button */}
        <Button colorScheme="blue" onClick={onNext}>Suivant</Button> {/* Blue button */}
      </Flex>
    </FormControl>
  );
}

function StepThree({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel textAlign="center">Votre situation</FormLabel>
      <FormComponent3 formData={formData} setFormData={setFormData} />
      <Flex justify="space-between">
        <Button colorScheme="blue" onClick={onPrev}>Précédent</Button> {/* Blue button */}
        <Button colorScheme="blue" onClick={onNext}>Suivant</Button> {/* Blue button */}
      </Flex>
    </FormControl>
  );
}

function StepFour({ onPrev, onNext, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel textAlign="center">Vos travaux</FormLabel>
      <FormComponent4 formData={formData} setFormData={setFormData} />
      <Flex justify="space-between">
        <Button colorScheme="blue" onClick={onPrev}>Précédent</Button> {/* Blue button */}
        <Button colorScheme="blue" onClick={onNext}>Suivant</Button> {/* Blue button */}
      </Flex>
    </FormControl>
  );
}

function StepFive({ onPrev, formData, setFormData }) {
  return (
    <FormControl>
      <FormLabel>Ci-dessous les aides auxquelles vous avez droit</FormLabel>
      {/* Display a summary of the formData for review */}
      <Flex justify="space-between">
        <Button colorScheme="blue" onClick={onPrev}>Précédent</Button> {/* Blue button */}
        <Button colorScheme="blue" onClick={() => {console.log(formData);}}>Soumettre</Button> {/* Blue button */}
      </Flex>
    </FormControl>
  );
}

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // ... other formData properties
    selectedWorks: {
      isolation: [], // Initialize this with empty arrays or preselected values
      heating: [],
      ventilation: [],
      // ... other categories
    },
  });

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
      <Heading as="h3" size="lg">Trouvez les aides adaptées à votre besoin</Heading>
      <Stack spacing={4}>
        {renderStep()}
      </Stack>
    </Box>
  );
}

export default MultiStepForm;
