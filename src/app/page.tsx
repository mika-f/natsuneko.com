import { IndexTemplate } from "@/templates/IndexTemplate";

export default function Home() {
  return (
    <IndexTemplate
      lang="en"
      title={
        <>
          Boost Your <br /> Productivity
        </>
      }
      description="Empower you to eliminate distractions, streamline processes, and focus on what matters, so you can reach your goals efficiently."
      sections={{
        oss: "Open Source Products",
        proprietary: "Proprietary Products",
        web: "Web Services",
        contact: {
          title: "Contact",
          description:
            "Please feel free to inquire about requests for your productivity improvements. If you agree to open the source code after a certain period of time after delivery, we will work it so free of charge.",
        },
      }}
    />
  );
}
