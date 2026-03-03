import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const WhatsAppButton = ({
  message = "Hi, I'd like to book an appointment at Ammu Beauty Care.",
  phone = "919876543210",
  children = "Book on WhatsApp",
  className = "",
  variant = "default",
  size = "default",
}: WhatsAppButtonProps) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        {children}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
