// // import { useState } from "react";
// // import { v4 as uuidv4 } from "uuid"; //pnpm install uuid
// // import { useDisclosure } from '@mantine/hooks';
// // import {
// //   Modal,
// //   TextInput,
// //   NumberInput,
// //   Select,
// //   Button,
// //   Stack,
// //   ModalCloseButton,
// // } from "@mantine/core";

// // interface AddFoodModalProps {
// //   opened: boolean;
// //   onClose: () => void;
// //   onAdd: (
// //     name: string,
// //     price: number | string,
// //     quantity: number | string,
// //     category: string
// //   ) => void;
// // }

// // export default function AddFoodModal({
// //   opened,
// //   onClose,
// //   onAdd,
// // }: AddFoodModalProps) {
// //   const [name, setName] = useState<string>("");
// //   const [price, setPrice] = useState<number | string>(0);
// //   const [quantity, setQuantity] = useState<number | string>(0);
// //   const [category, setCategory] = useState<string | null>(null);

//   // const handleSubmit = () => {
//   //   if (!name.trim() || !price || !quantity || !category) return;
//   //   onAdd(name, price, quantity, category);
//   //   setName("");
//   //   setPrice("");
//   //   setQuantity("");
//   //   setCategory("");
//   //   onClose();
//   // };

//   // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
//   let val_number: number = Number("500.0");
//   console.log(val_number + 100); // 600.0

//   return {
//   //   /* Type additional text here. */
//   //   <>
//   //   <Modal opened={opened} onClose={close} title="Authentication">
      
//   //   </Modal>

//   //   <Button variant="default" onClick={open}>
//   //     Open modal
//   //   </Button>
//   // </>
//   };
// // }
