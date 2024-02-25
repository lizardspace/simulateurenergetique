import React from 'react';
import {
  Box,
  VStack,
  Radio,
  RadioGroup,
  Stack,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react';

function FormComponent2({ formData, setFormData }) {
  const handleHousingTypeChange = (value) => setFormData({ ...formData, housingType: value });
  const handleBuildingAgeChange = (value) => setFormData({ ...formData, buildingAge: value });
  const handlePostalCodeChange = (e) => setFormData({ ...formData, postalCode: e.target.value });

  return (
    <Box textAlign="center">
    <VStack spacing={4} as="form">
      <FormControl isRequired>
        <FormLabel>Quel est le type du logement à rénover ? *</FormLabel>
        <RadioGroup onChange={handleHousingTypeChange} value={formData.housingType || ''}>
          <Stack direction="row">
            <Radio value="house">Maison</Radio>
            <Radio value="apartment">Appartement</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>De quand date la construction du logement à rénover ? *</FormLabel>
        <RadioGroup onChange={handleBuildingAgeChange} value={formData.buildingAge || ''}>
          <Stack direction="column">
            <Radio value="lessThan2">Moins de 2 ans</Radio>
            <Radio value="between2And15">Entre 2 et 15 ans</Radio>
            <Radio value="moreThan15">Plus de 15 ans</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Code postal du logement à rénover : *</FormLabel>
        <Input
          placeholder="75001 ou Paris"
          onChange={handlePostalCodeChange}
          value={formData.postalCode || ''}
        />
        <FormHelperText>Saisissez une ville ou un code postal. Format attendu : 75001 ou Paris</FormHelperText>
      </FormControl>
    </VStack>
    </Box>
  );
}

export default FormComponent2;
