import { Timeline } from "./timeline.component";

import { TimelineItemModel } from "~/models/timeline.model";

export const TimelineWrapperComponent = ({
  timelineItems,
}: {
  timelineItems: TimelineItemModel[];
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-auto p-4"
      id="events"
    >
      <h4 className="text-4xl font-bold text-gray-800 mb-4">Life Events</h4>
      <div className="h-1 bg-green-300 mx-auto w-24 mb-8"></div>
      <div className="p-4 items-center flex justify-center">
        <div className="w-full max-w-4xl">
          <Timeline timelineItems={timelineItems} />
        </div>
      </div>
    </div>
  );
};
