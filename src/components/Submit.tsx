import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type SubmitProps = {
  rating: number;
  onCloseModal: () => void;
};

export default function Submit({ rating, onCloseModal }: SubmitProps) {
  const handleOpenChange = (open: boolean) => {
    if (!open) onCloseModal();
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button disabled={rating === 0} className="cursor-pointer">
          Submit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thank you!</DialogTitle>
          <DialogDescription>
            {`You rated us ${rating} star${rating > 1 ? "s" : ""}`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
