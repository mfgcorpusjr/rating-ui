import Rating from "@/components/Rating";

export default function App() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Rating
        title="How do you feel about React?"
        feedbacks={["Terrible", "Poor", "Fair", "Good", "Excellent"]}
      />
    </main>
  );
}
