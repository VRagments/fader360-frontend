import { QueueListIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import { useCreateStore } from 'leva';
import { useEffect, useRef, useState } from 'react';
import useZustand from '../../lib/zustand/zustand';
import { levaValuesForTw } from '../../style/levaTheme';

type PanelsSlideOutProps = {
    setOpenPanel: React.Dispatch<React.SetStateAction<'' | 'assets' | 'options'>>;
    position: {
        x: number;
        y: number;
    };
};
const PanelsSlideOut = ({ setOpenPanel, position: _position }: PanelsSlideOutProps) => {
    const storeSetFaderLevaOptionsStore = useZustand((state) => state.methods.storeSetFaderLevaOptionsStore);

    const [slideOutHidden, setSlideOutHidden] = useState(false);

    /* Create collective Leva store for general options: */
    const levaOptionsPanelStoreRef = useRef(useCreateStore());
    useEffect(() => {
        storeSetFaderLevaOptionsStore(levaOptionsPanelStoreRef.current);
    }, [levaOptionsPanelStoreRef.current]);

    if (slideOutHidden) {
        return null;
    }

    return (
        <div className='pointer-events-auto absolute right-0 top-0 z-30 m-2 flex flex-col rounded-md bg-slate-700 p-2'>
            <div
                className='my-1 flex h-24 w-24 cursor-pointer flex-col items-center justify-around rounded-md bg-slate-500 p-2 hover:bg-slate-400'
                onClick={(_event) => {
                    setSlideOutHidden(true);
                    setOpenPanel('assets');
                }}
            >
                <QueueListIcon className={'h-10 w-10' + levaValuesForTw.colors.highlight1.fill} />
                <span className={'text-center font-mono' + levaValuesForTw.fontSizes.root + levaValuesForTw.colors.highlight1.text}>
                    Scene Assets
                </span>
            </div>

            <div
                className='my-1 flex h-24 w-24 cursor-pointer flex-col items-center justify-around rounded-md bg-slate-500 p-2 hover:bg-slate-400'
                onClick={(_event) => {
                    setSlideOutHidden(true);
                    setOpenPanel('options');
                }}
            >
                <WrenchScrewdriverIcon className={'h-10 w-10' + levaValuesForTw.colors.highlight1.fill} />
                <span className={'text-center font-mono' + levaValuesForTw.fontSizes.root + levaValuesForTw.colors.highlight1.text}>
                    Scene Options
                </span>
            </div>
        </div>
    );
};

export default PanelsSlideOut;
