import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Alexandre Rehder</Text>
        <Text color="gray.300" fontSize="small">
          rehderync@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Alexandre Rehder"
        src="https://github.com/alexandrerehder.png"
      />
    </Flex>
  );
}
