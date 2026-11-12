export interface VerificationStep {
  id: string;
  text: string;
  completed: boolean;
  boldKeywords?: string[];
}

export interface ClientResponse {
  text: string;
  isHomologated: boolean;
  characterCount?: number;
}

export interface ExternalLink {
  title: string;
  url: string;
  code?: string;
}

export interface Article {
  id: string;
  number: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
  updatedStatus: string;
  code: string;
  subtitle: string;
  verificationSteps: VerificationStep[];
  problemHtml?: string;
  reasonHtml?: string;
  solutionHtml?: string;
  notesHtml?: string;
  clientResponse: ClientResponse;
  externalLink: ExternalLink;
}
