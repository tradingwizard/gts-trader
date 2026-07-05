import React from 'react';
import { observer } from 'mobx-react-lite';
import './analysis-tool.scss';

const AnalysisTool = observer(() => {
    return (
        <div className='analysis-tool'>
            <iframe
                src='https://bot-analysis-tool-belex.web.app'
                className='analysis-tool__iframe'
                title='GTS Empire Market Analysis'
                sandbox='allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads'
                allow='clipboard-write'
            />
        </div>
    );
});

export default AnalysisTool;
