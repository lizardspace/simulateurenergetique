import React from 'react';
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
  Collapse,
  FormControl,
  FormLabel,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

function FormComponent4({ formData, setFormData }) {
  const [showDetails, setShowDetails] = React.useState({});

  const handleWorkSelectionChange = (category) => (value) => {
    setFormData({
      ...formData,
      selectedWorks: {
        ...formData.selectedWorks,
        [category]: value,
      },
    });
  };

  const toggleDetails = (category) => {
    setShowDetails({
      ...showDetails,
      [category]: !showDetails[category],
    });
  };

  const categories = {
    isolation: [
      'Isolation des combles perdus',
      'Isolation des murs par l’extérieur',
      // ... other options
    ],
    heating: [
      // ... heating options
    ],
    ventilation: [
      // ... ventilation options
    ],
    // ... other categories
  };

  return (
    <VStack spacing={4} as="form">
      {Object.entries(categories).map(([category, options]) => (
        <FormControl key={category}>
          <FormLabel>{category}</FormLabel>
          <IconButton
            aria-label={`Toggle ${category}`}
            icon={showDetails[category] ? <ChevronUpIcon /> : <ChevronDownIcon />}
            onClick={() => toggleDetails(category)}
          />
          <Collapse in={showDetails[category]} animateOpacity>
            <CheckboxGroup
              colorScheme="blue"
              defaultValue={formData.selectedWorks[category]}
              onChange={handleWorkSelectionChange(category)}
            >
              <Stack pl={6} mt={1} spacing={1}>
                {options.map((option) => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </Collapse>
        </FormControl>
      ))}
      {/* ... */}
      {/* A button or any control to handle the form submission */}
    </VStack>
  );
}

export default FormComponent4;
