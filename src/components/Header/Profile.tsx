import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alexandre Rehder</Text>
          <Text color="gray.300" fontSize="small">
            rehderync@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Alexandre Rehder"
        src="https://github.com/alexandrerehder.png"
      />
    </Flex>
  );
}
