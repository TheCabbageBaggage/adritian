import { Database } from '@tinacms/graphql';
import { ConfigManager } from '../../config-manager';
import { BaseCommand } from '../baseCommands';
export declare class BuildCommand extends BaseCommand {
    static paths: string[][];
    localOption: boolean;
    skipIndexing: boolean;
    partialReindex: boolean;
    tinaGraphQLVersion: string;
    /**
     * This option allows the user to skip the tina cloud checks if they want to. This could be useful for mismatched GraphQL versions or if they want to build only using the local client and never connect to Tina Cloud
     */
    skipCloudChecks: boolean;
    skipSearchIndex: boolean;
    static usage: import("clipanion").Usage;
    catch(error: any): Promise<void>;
    execute(): Promise<number | void>;
    checkClientInfo(configManager: ConfigManager, apiURL: string): Promise<{
        hasUpstream: boolean;
    }>;
    syncUpstreamProject(configManager: ConfigManager, apiURL: string): Promise<void>;
    checkGraphqlSchema(configManager: ConfigManager, database: Database, apiURL: string): Promise<void>;
}
export declare const fetchRemoteGraphqlSchema: ({ url, token, }: {
    url: string;
    token?: string;
}) => Promise<any>;
