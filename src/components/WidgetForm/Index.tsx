import { useState } from "react";
import bugImageUrl from "../../../public/Imagens/bug.svg";
import ideaImageUrl from "../../../public/Imagens/idea.svg";
import thoughtImageUrl from "../../../public/Imagens/thought.svg";
import FeedbackTypeStep from "./steps/FeedbackTypeStep";
import FeedbackContentStep from "./steps/FeedbackContentStep";
import FeedbackSucessStep from "./steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Inseto'
        },
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Lampada acesa'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);
    function handleRestarFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 realtive rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestarRequested={handleRestarFeedback}/>
            ):(
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestarFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}