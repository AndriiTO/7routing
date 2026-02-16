import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: { id: string };
};

export default function NotePreviewModal({ params }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <NotePreview id={params.id} />
    </Modal>
  );
}




// import Modal from "@/components/Modal/Modal";
// import NotePreview from "../../../../components/NotePreview/NotePreview";

// type Props = {
//   params: { id: string };
// };

// export default function NotePreviewModal({ params }: Props) {
//   return (
//     <Modal>
//       <NotePreview id={params.id} />
//     </Modal>
//   );
// }