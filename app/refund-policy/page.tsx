import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#050a12] text-white">
      <div className="container py-10 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={16} /> Back to CISSP Prep</Link>
        <div className="mt-12 max-w-4xl">
          <div className="eyebrow"><ShieldCheck size={14} /> REFUND POLICY</div>
          <h1 className="section-title mt-5 text-5xl font-semibold md:text-7xl">100% Training-Fee Refund Guarantee*</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">This policy describes the conditions under which an eligible purchaser may request a refund of the $99 training fee. It is a training-fee refund policy, not a guarantee that a candidate will pass the CISSP examination.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            ['Training fee', '$99', 'The advertised fee for the training program.'],
            ['Exam fee', 'Separate', 'The official CISSP examination fee is not included unless expressly stated.'],
            ['Refund', '100%', 'Eligible candidates may receive 100% of the eligible training fee back after satisfying all requirements.'],
          ].map(([a, b, c]) => <div className="card rounded-2xl p-6" key={a}><div className="text-sm text-slate-500">{a}</div><div className="mt-2 text-3xl font-bold">{b}</div><p className="mt-2 text-sm leading-6 text-slate-500">{c}</p></div>)}
        </div>

        <article className="card mt-8 max-w-4xl rounded-3xl p-7 md:p-10">
          <h2 className="text-2xl font-semibold">Eligibility requirements</h2>
          <p className="mt-3 leading-7 text-slate-400">To request a refund under this guarantee, the purchaser must satisfy every requirement published for the program. Unless the checkout page or program terms specify otherwise, the intended requirements are:</p>
          <div className="mt-6 grid gap-4">
            {[
              'The $99 training fee was successfully paid and the purchaser can provide proof of payment.',
              'The purchaser completed the required training activities and any minimum participation requirements stated for the program.',
              'The purchaser sat for the official CISSP examination after enrolling and within the applicable eligibility window communicated for the program.',
              'The purchaser did not pass the examination and can provide reasonable evidence of the result, such as the official result notification or other acceptable documentation.',
              'The refund request is submitted within the refund-request window stated for the program or checkout terms.',
              'The purchaser has complied with all published program rules and has not engaged in fraud, abuse, chargeback misuse, or materially misleading conduct.',
            ].map((x) => <div key={x} className="flex gap-3 text-sm leading-7 text-slate-400"><CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-300" /> {x}</div>)}
          </div>

          <div className="mt-10 rounded-2xl border border-sky-300/15 bg-sky-300/5 p-5">
            <h3 className="font-semibold text-sky-100">Important: program-specific requirements must be published before purchase</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Before launch, replace any generic requirement above with the final, precise eligibility window, completion criteria, exam-attempt requirements, documentation, and request deadline that you will actually enforce. Do not alter eligibility after a purchase in a way that is materially adverse to the purchaser.</p>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">How to claim</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-400">
            <li>Submit your refund request using the published contact or refund-request method.</li>
            <li>Provide your purchase details and the documentation required to establish eligibility.</li>
            <li>Allow the program operator reasonable time to review the request.</li>
            <li>If approved, the eligible training fee will be refunded to the original payment method, subject to the payment provider’s processing timeline.</li>
          </ol>

          <h2 className="mt-10 text-2xl font-semibold">What this guarantee does not cover</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-400">
            <li>The official CISSP examination fee.</li>
            <li>Travel, accommodation, books, third-party products, or other costs not included in the $99 training purchase.</li>
            <li>Requests that do not satisfy the published eligibility requirements.</li>
            <li>Claims based on an assumption of guaranteed exam success.</li>
          </ul>

          <p className="mt-10 border-t border-white/8 pt-6 text-xs leading-6 text-slate-600">*This page is a public policy template and should be reviewed for your final commercial terms and applicable law before launch. CISSP® is a registered certification mark of ISC2. This independent program is not affiliated with or endorsed by ISC2 unless explicitly stated.</p>
        </article>
      </div>
    </main>
  );
}
