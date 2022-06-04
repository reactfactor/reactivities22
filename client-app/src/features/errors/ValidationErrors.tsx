import { Message} from "semantic-ui-react";

interface Props {
    //V155
    errors:any;
    //errors: string[] | null;
}
export default function ValidationErrors({errors}: Props) {
    return (
        <Message error>
            {errors && (
               <Message.List>
                   {errors.map((err:any, i: any) => (
                       <Message.Item key={i}>{err}</Message.Item>
                   ))}
               </Message.List>
            )}
        </Message>
    )
}