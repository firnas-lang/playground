import { FiPlay, FiShare2 } from 'react-icons/fi'
import { Title } from './Title';
import { Logo } from './Logo';

interface ToolbarProps {
    onRun: Function,
    onShare: Function,
    onDropdownChange: (code: string) => void,
}

const codeMap: any = {
    "examples": "",
    "function": `دالة فيبوناتشي(س) {
    لو(س < ٢) رد س؛
    رد فيبوناتشي(س − ٢) + فيبوناتشي(س − ١)؛
}

اطبع_سطر(فيبوناتشي(١١))؛
`,
    "classes": ""
}

export const Toolbar = ({ onRun, onShare, onDropdownChange }: ToolbarProps) => {
    return (
        <div className="flex flex-row items-center py-2">
            <Logo width={24} />

            <div className="px-1" />

            <Title />

            <div className="px-1" />

            <button onClick={() => {
                onRun()
            }}>
                <div className="pl-0 pr-0.5 flex flex-row border border-firnas-500 bg-firnas-500 items-center rounded-xl hover:border-firnas-700 hover:bg-firnas-700">
                    <FiPlay className="px-0.5 fill-white stroke-none" />
                    <p className="text-white px-2 text-xs">تشغيل</p>
                </div>
            </button>

            <div className="px-1" />

            <div className="group pl-0 pr-1 flex flex-row border border-firnas-500 items-center rounded-xl hover:border-firnas-500 hover:bg-firnas-500">
                <FiShare2 className="px-0.5 fill-firnas-500 stroke-firnas-500 group-hover:fill-white group-hover:stroke-white" />
                <p className="text-firnas-500 px-2 text-xs group-hover:text-white">شارك</p>
            </div>

            <div className="px-1" />

            <select
                onChange={(e) => { const code = codeMap[e.target.value]; onDropdownChange(code); }}
                className="
                    p-0
                    flex
                    flex-row
                    border
                    border-firnas-500
                    items-center
                    rounded-xl
                    text-firnas-500
                    text-xs
                    hover:bg-firnas-500
                    hover:text-white
                "
            >
                <option value="examples">أمثلة - Examples</option>
                <option value="function">دالة - Functions</option>
                <option value="classes">أصناف - Classes</option>
            </select>
        </div>
    );
}
