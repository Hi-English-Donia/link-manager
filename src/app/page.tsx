import { AiInsightsStream } from '@/components/ai-insights-stream';

export default function Home() {
  return (
    <>
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>
      <AiInsightsStream />
    </>
  );
}
