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

function FormComponent1({ formData, setFormData }) {
    const [userType, setUserType] = React.useState('');
    const [userNeed, setUserNeed] = React.useState('');
    const [acceptDataCollection, setAcceptDataCollection] = React.useState(false);
    const handleUserTypeChange = (value) => {
      setFormData({ ...formData, userType: value });
    };
  
    const handleUserNeedChange = (value) => {
      setFormData({ ...formData, userNeed: value });
    };
  
    const handleDataCollectionChange = (e) => {
      setFormData({ ...formData, acceptDataCollection: e.target.checked });
    };
  
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
        </VStack>
      );
    }
    
    export default FormComponent1;
  