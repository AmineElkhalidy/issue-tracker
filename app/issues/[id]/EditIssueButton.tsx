import { PencilIcon } from "@heroicons/react/24/solid";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Link href={`/issues/${issueId}/edit`}>
        <PencilIcon className="w-4 h-4" />
      </Link>
    </Button>
  );
};

export default EditIssueButton;
