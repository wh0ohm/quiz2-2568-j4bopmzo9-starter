import { type FooterProps } from "../libs/Footer";
import { Text, Group } from "@mantine/core";
export default function Footer({ fullName, studentId , courseName , year}: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        @ {fullName} {studentId} {courseName}-{year}. All rights reserved.
      </Text>
    </Group>
  );
}