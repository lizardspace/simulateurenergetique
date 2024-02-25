import React from 'react';
import {
  Box,
  VStack,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Button,
  Text,
  useRadioGroup,
} from '@chakra-ui/react';

function FormComponent1() {
  // State for the form fields
  const [userType, setUserType] = React.useState('');
  const [userNeed, setUserNeed] = React.useState('');
  const [acceptDataCollection, setAcceptDataCollection] = React.useState(false);

  // Handlers for form fields
  const handleUserTypeChange = (value) => setUserType(value);
  const handleUserNeedChange = (value) => setUserNeed(value);
  const handleDataCollectionChange = (e) => setAcceptDataCollection(e.target.checked);

  // Chakra UI radio group hook
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'userType',
    defaultValue: userType,
    onChange: handleUserTypeChange,
  });

  const userTypeProps = getRootProps();

  return (
    <VStack spacing={4} as="form">
      <Box>
        <Text mb={2}>Vous êtes: *</Text>
        <Stack {...userTypeProps} direction="row">
          <Radio {...getRadioProps({ value: 'ownerOccupant' })}>Propriétaire occupant</Radio>
          <Radio {...getRadioProps({ value: 'ownerLandlord' })}>Propriétaire bailleur</Radio>
          <Radio {...getRadioProps({ value: 'coOwnershipSyndicate' })}>Syndicat de copropriétaires</Radio>
        </Stack>
      </Box>

      <Box>
        <Text mb={2}>Quel est votre besoin? *</Text>
        <RadioGroup onChange={handleUserNeedChange} value={userNeed}>
          <Stack direction="column">
            <Radio value="energyRenovation">Rénovation énergétique</Radio>
            <Radio value="autonomy">Autonomie de la personne</Radio>
            <Radio value="securityHealth">Sécurité / Salubrité</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Checkbox isChecked={acceptDataCollection} onChange={handleDataCollectionChange}>
        J'accepte la collecte de mes données à des fins d'amélioration du service.
      </Checkbox>

      <Button colorScheme="blue">Suivant</Button>
    </VStack>
  );
}

export default FormComponent1;
