import { IndexTemplate } from "@/templates/IndexTemplate";

export default function Home() {
  return (
    <IndexTemplate
      lang="ja"
      title={
        <>
          Boost Your <br /> Productivity
        </>
      }
      description="気を紛らわすものや不要な手順を排除し、重要なことにのみ集中できるようにして、効率的に目標を達成できるようにお手伝いします。"
      sections={{
        oss: "オープンソースプロダクト",
        proprietary: "プロプライエタリプロダクト",
        web: "Web サービス",
        contact: {
          title: "Contact",
          description:
            "生産性向上に関する相談はお気軽にお問い合わせください。もし一定期間経過後、ソースコードを公開することに同意頂ける場合は無償で作業いたします。",
        },
      }}
    />
  );
}
