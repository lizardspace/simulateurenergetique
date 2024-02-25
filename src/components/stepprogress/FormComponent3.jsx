import React from 'react';
import {
  Box,
  VStack,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Tooltip,
  Icon,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

function FormComponent3({ formData, setFormData }) {
  const handleTaxIncomeChange = (e) => setFormData({ ...formData, taxIncome: e.target.value });
  const handleHouseholdSizeChange = (e) => setFormData({ ...formData, householdSize: e.target.value });
  const handlePrimaryResidencePostalChange = (e) => setFormData({ ...formData, primaryResidencePostal: e.target.value });

  return (
    <Box textAlign="center">
    <VStack spacing={4} as="form">
      <FormControl isRequired>
        <FormLabel>Revenu fiscal de référence du foyer : *</FormLabel>
        <Input
          placeholder="Saisissez votre revenu fiscal de référence du foyer"
          onChange={handleTaxIncomeChange}
          value={formData.taxIncome || ''}
        />
        <Tooltip label="Où trouver ce montant ?">
          <Icon as={InfoIcon} color="blue.500" mx="2px" />
        </Tooltip>
        <FormHelperText>Ce champ est requis</FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Nombre de personnes composant le foyer : *</FormLabel>
        <Input
          placeholder="Saisissez le nombre de personnes composant le foyer"
          onChange={handleHouseholdSizeChange}
          value={formData.householdSize || ''}
          type="number"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Code postal de l'adresse principale : *</FormLabel>
        <Input
          placeholder="75001 ou Paris"
          onChange={handlePrimaryResidencePostalChange}
          value={formData.primaryResidencePostal || ''}
        />
        <FormHelperText>Veuillez choisir une ville dans la liste.</FormHelperText>
      </FormControl>
    </VStack>
    </Box>
  );
}

export default FormComponent3;
