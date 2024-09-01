export interface IMessage{
    source: MessageSource,
}
export interface IServerMessage extends IMessage{}
export interface IClientMessage extends IMessage{
    clientId: number
}
export enum MessageSource{
    CLIENT, 
    SERVER
}