import React from 'react';
import {
  Flex,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  Collapse,
  FormControl,
  FormLabel,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

function FormComponent4({ formData, setFormData }) {
  // State to track the currently expanded category
  const [expandedCategory, setExpandedCategory] = React.useState(null);

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
    setExpandedCategory(expandedCategory !== category ? category : null);
  };

  // Define your categories and options here
  const categories = {
    isolation: [
      'Isolation des combles perdus',
      'Isolation des murs par l’extérieur',
      'Isolation des murs par l’intérieur',
      'Isolation des parois vitrées (fenêtres et portes-fenêtres) en remplacement de simple vitrage',
      'Isolation des rampants de toiture ou des plafonds de combles',
      'Isolation des toitures terrasses',
      'Isolation d’un plancher bas',
    ],
    chauffage: [
      'Chaudière bois à alimentation automatique (granulés, plaquettes)',
      'Chaudière bois à alimentation manuelle (bûches)',
      'Chauffe-eau solaire individuel en Métropole (et dispositifs solaires pour le chauffage de l’eau)',
      'Chauffe-eau thermodynamique',
      'Dépose d’une cuve à fioul',
      'Foyer fermé et insert à bûches ou à granulés',
      'Partie thermique d’un équipement PVT eau (système hybride photovoltaïque et thermique)',
      'Pompe à chaleur air/eau',
      'Pompe à chaleur solaire thermique ou géothermique',
      'Poêle à bûches et cuisinière à bûches',
      'Poêle à granulés et cuisinière à granulés',
      'Raccordement à un réseau de chaleur et/ou de froid',
      'Système solaire combiné (et dispositifs solaires pour le chauffage des locaux)',
      'Émetteurs électriques',
    ],
    ventilation: [
      'Ventilation double flux',
      'Ventilation simple flux',
    ],
    regulation: [
      'Régulation par programmation horaire pièce par pièce'
    ],
    optimisation: [
      // Add production and optimization options here
    ],
  };

  return (
    <Box textAlign="center">
    <VStack spacing={4} as="form">
      {Object.entries(categories).map(([category, options]) => (
        <FormControl key={category}>
          <Flex justify="space-between" align="center">
            <FormLabel>{category}</FormLabel>
            <IconButton
              aria-label={`Toggle ${category}`}
              icon={expandedCategory === category ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onClick={() => toggleDetails(category)}
              variant="ghost"
            />
          </Flex>
          <Collapse in={expandedCategory === category} animateOpacity>
            <CheckboxGroup
              colorScheme="blue"
              defaultValue={formData.selectedWorks[category] || []}
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
      {/* Rest of the component */}
    </VStack>
    </Box>
  );
}

export default FormComponent4;
