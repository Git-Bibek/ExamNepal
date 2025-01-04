import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface ImageParagraphCardProps {
    image: string;
    paragraph: string;
    title: string;
}

const ImageParagraphCard = ({image, paragraph, title}: ImageParagraphCardProps) => {
    return (
        <>
            <div className={' px-6 py-4'}>
                <img src={image} alt=""
                     className={'w-full  bg-cover '}/>
                <h3 className={' text-2xl font-bold'}>{title}</h3>
                <p className={' text-gray-600 mt-2 text-sm text-left'}>
                    {paragraph}
                </p>
            </div>
        </>
    )

}

const TitleParagraphCard = () => {
    return (
        <>
            <div className={' px-6 py-4 flex items-center justify-center gap-3'}>
                <AddPhotoAlternateIcon fontSize={"large"}/>
                <div className={' mt-4 flex flex-col gap-1 '}>
                    <h3 className={' text-2xl font-bold text-start'}>A Valuable Preparation</h3>
                    <p className={' text-gray-600 text-sm text-left'}>
                        Preparation is all about how you react in Real Scenario. Taking Exams can help you feel the real
                        heat.
                    </p>
                </div>
            </div>
        </>
    )
}
export {ImageParagraphCard, TitleParagraphCard}