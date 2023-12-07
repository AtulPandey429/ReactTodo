import React from 'react';

const Topics = () => {
  return (
    <div className="relative bg-color-gray-50 w-full h-[81.81rem] overflow-hidden text-left text-[0.88rem] text-colors-text-title-primary-text font-inter-body-14-semibold">
      <div className="absolute top-[73.44rem] left-[-22.62rem] rounded-medium bg-color-gray-50 box-border w-[18.88rem] h-[5.19rem] overflow-hidden text-[1rem] border-[1px] border-solid border-gray-100">
        <div className="absolute top-[0.75rem] left-[0.69rem] flex flex-row items-center justify-start gap-[6.25rem]">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative font-medium">Community</div>
            <div className="rounded-medium bg-base-white flex flex-row items-center justify-start p-[0.38rem] gap-[0.25rem] text-[0.88rem] text-colors-text-body-primary-text border-[1px] border-solid border-colors-border-radius-primary-border-radius">
              <img
                className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                alt=""
                src="/social.svg"
              />
              <div className="relative leading-[1.13rem]">Community Name</div>
            </div>
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/chevronselectorvertical.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0rem] left-[18rem] w-[71.88rem] flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.5rem] text-colors-text-body-primary-text">
        <div className="flex flex-row items-center justify-start gap-[0.63rem] opacity-[0.8]">
          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
            <img
              className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0"
              alt=""
              src="/piechart.svg"
            />
            <div className="relative font-medium">Analytics</div>
          </div>
          <img
            className="relative w-[0.91rem] h-[0.91rem] overflow-hidden shrink-0"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div className="relative font-medium">Topics</div>
      </div>
      <div className="absolute top-[33.31rem] left-[18rem] flex flex-col items-start justify-start pt-[0rem] px-[1.5rem] pb-[0.63rem] text-colors-text-body-primary-text">
        <div className="rounded-2xl bg-base-white overflow-hidden flex flex-col items-start justify-start p-[1.38rem]">
          <div className="flex flex-col items-start justify-start gap-[1rem]">
            <div className="box-border w-[66.06rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] gap-[4.13rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
              <div className="w-[53.38rem] flex flex-row flex-wrap items-start justify-start gap-[0.38rem]">
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs bg-base-white flex flex-row items-center justify-start py-[0.44rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/originalsource.svg"
                    />
                    <div className="relative font-medium">Original Source</div>
                  </div>
                  <div className="relative bg-base-white box-border w-[2.25rem] h-[2.38rem] overflow-hidden shrink-0 ml-[-0.06rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11.5px)] rounded bg-base-white box-border h-[1.5rem] flex flex-col items-center justify-center p-[0.38rem] border-[1px] border-solid border-primary-100">
                      <div className="relative leading-[1.13rem]">is</div>
                    </div>
                  </div>
                  <div className="rounded-tl-none rounded-tr-5xs rounded-br-5xs rounded-bl-none bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-start py-[0.69rem] px-[0.63rem] gap-[0.63rem] ml-[-0.06rem] text-primary-800 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="rounded bg-primary-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.38rem]">
                      <div className="relative">Reddit</div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs bg-base-white flex flex-row items-center justify-start py-[0.44rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/tags.svg"
                    />
                    <div className="relative font-medium">Member Tag</div>
                  </div>
                  <div className="relative bg-base-white box-border w-[2.25rem] h-[2.38rem] overflow-hidden shrink-0 ml-[-0.06rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11.5px)] rounded bg-base-white box-border h-[1.5rem] flex flex-col items-center justify-center p-[0.38rem] border-[1px] border-solid border-primary-100">
                      <div className="relative leading-[1.13rem]">is</div>
                    </div>
                  </div>
                  <div className="rounded-tl-none rounded-tr-5xs rounded-br-5xs rounded-bl-none bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-start py-[0.69rem] px-[0.63rem] gap-[0.63rem] ml-[-0.06rem] text-primary-800 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="rounded bg-primary-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.38rem]">
                      <div className="relative">Reddit</div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/close1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs bg-base-white flex flex-row items-center justify-start py-[0.44rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/tags1.svg"
                    />
                    <div className="relative font-medium">Member Tag</div>
                  </div>
                  <div className="relative bg-base-white box-border w-[2.25rem] h-[2.38rem] overflow-hidden shrink-0 ml-[-0.06rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11.5px)] rounded bg-base-white box-border h-[1.5rem] flex flex-col items-center justify-center p-[0.38rem] border-[1px] border-solid border-primary-100">
                      <div className="relative leading-[1.13rem]">is</div>
                    </div>
                  </div>
                  <div className="rounded-tl-none rounded-tr-5xs rounded-br-5xs rounded-bl-none bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-start py-[0.69rem] px-[0.63rem] gap-[0.63rem] ml-[-0.06rem] text-primary-800 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="rounded bg-primary-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.38rem]">
                      <div className="relative">Reddit</div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/close2.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs bg-base-white flex flex-row items-center justify-start py-[0.44rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/tags2.svg"
                    />
                    <div className="relative font-medium">Member Tag</div>
                  </div>
                  <div className="relative bg-base-white box-border w-[2.25rem] h-[2.38rem] overflow-hidden shrink-0 ml-[-0.06rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11.5px)] rounded bg-base-white box-border h-[1.5rem] flex flex-col items-center justify-center p-[0.38rem] border-[1px] border-solid border-primary-100">
                      <div className="relative leading-[1.13rem]">is</div>
                    </div>
                  </div>
                  <div className="rounded-tl-none rounded-tr-5xs rounded-br-5xs rounded-bl-none bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-start py-[0.69rem] px-[0.63rem] gap-[0.63rem] ml-[-0.06rem] text-primary-800 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="rounded bg-primary-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.38rem]">
                      <div className="relative">Reddit</div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/close3.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs bg-base-white flex flex-row items-center justify-start py-[0.44rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/lightbulb.svg"
                    />
                    <div className="relative font-medium">Topic</div>
                  </div>
                  <div className="relative bg-base-white box-border w-[2.25rem] h-[2.38rem] overflow-hidden shrink-0 ml-[-0.06rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11.5px)] rounded bg-base-white box-border h-[1.5rem] flex flex-col items-center justify-center p-[0.38rem] border-[1px] border-solid border-primary-100">
                      <div className="relative leading-[1.13rem]">is</div>
                    </div>
                  </div>
                  <div className="rounded-tl-none rounded-tr-5xs rounded-br-5xs rounded-bl-none bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-start py-[0.69rem] px-[0.63rem] gap-[0.63rem] ml-[-0.06rem] text-primary-800 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="rounded bg-primary-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.38rem]">
                      <div className="relative">Reddit</div>
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/close4.svg"
                    />
                  </div>
                </div>
                <div className="rounded-5xs bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] gap-[0.5rem] text-gray-600 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                      alt=""
                      src="/filter.svg"
                    />
                    <div className="relative font-medium">Add Filter</div>
                  </div>
                  <img
                    className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
                <div className="rounded-5xs bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] gap-[0.5rem] text-gray-600 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                      alt=""
                      src="/bookmarkadd.svg"
                    />
                    <div className="relative font-medium">Save Filter</div>
                  </div>
                  <img
                    className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/chevrondown1.svg"
                  />
                </div>
              </div>
              <div className="rounded-5xs bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] gap-[0.5rem] text-colors-text-title-secondary-text border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                    alt=""
                    src="/bookmarkcheck.svg"
                  />
                  <div className="relative font-medium">Saved Filters</div>
                </div>
                <img
                  className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="relative rounded-2xl bg-base-white box-border w-[66.06rem] h-[35.25rem] overflow-hidden shrink-0 text-[0.75rem] text-gray-600 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
              <div className="absolute top-[0rem] left-[0rem] flex flex-row items-center justify-start">
                <div className="w-[9.56rem] flex flex-col items-start justify-center">
                  <div className="self-stretch bg-color-gray-25 flex flex-row items-center justify-start py-spacing-space-12 px-spacing-space-16 gap-[0.75rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_6.67px)] left-[calc(50%_-_6.67px)] rounded-[2.92px] bg-gray-100 box-border w-[0.83rem] h-[0.83rem] border-[1.3px] border-solid border-gray-300" />
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative font-medium">Topic</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-colors-text-body-primary-text">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Teachers</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                  </div>
                </div>
                <div className="w-[13.19rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative font-medium">Mention Count</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.63rem]">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[8.25rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/percent.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative font-medium">Growth</div>
                        <img
                          className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/arrownarrowup.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-center text-success-700">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons1.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons2.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons3.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons4.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons5.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons6.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons7.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons8.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons9.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons10.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons11.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons12.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[8.56rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative font-medium">
                        Original Source
                      </div>
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/arrownarrowup1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                      </div>
                      <div className="relative leading-[1rem]">Discord</div>
                    </div>
                  </div>
                </div>
                <div className="w-[7.75rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/facehappy.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative font-medium">Positive</div>
                        <img
                          className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                          alt=""
                          src="/arrownarrowup2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.63rem]">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">90</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">90</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[8.88rem] flex flex-col items-start justify-start gap-[0.06rem]">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/facefrown.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative font-medium">Negative</div>
                        <img
                          className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                          alt=""
                          src="/arrownarrowup3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.63rem]">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">90</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[9.56rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative font-medium">Activity</div>
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/arrownarrowup4.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart1.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart2.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart3.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart4.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart5.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart6.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart7.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart8.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart9.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart10.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart11.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[2.81rem] left-[66rem] bg-base-white shadow-[0px_1px_8px_rgba(71,_84,_103,_0.08),_0px_0px_0px_1px_#eaecf0] w-[35.88rem] h-[0.63rem] overflow-hidden [transform:_rotate(90deg)] [transform-origin:0_0]">
                <div className="absolute top-[0.13rem] left-[4.38rem] rounded-[100px] bg-gray-300 w-[23.06rem] h-[0.38rem]" />
              </div>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="w-[66rem] flex flex-row items-center justify-end py-[0rem] pr-[0rem] pl-[6.25rem] box-border gap-[0.63rem]">
                <div className="rounded-5xs bg-base-white box-border w-[8.06rem] h-[2.38rem] flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/filter1.svg"
                    />
                    <div className="relative">
                      <b className="font-inter-body-14-semibold">25</b>
                      <span className="font-medium font-inter-body-14-semibold">{` `}</span>
                      <span className="leading-[1.29rem]">per page</span>
                    </div>
                  </div>
                  <img
                    className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                    alt=""
                    src="/chevrondown3.svg"
                  />
                </div>
                <div className="w-[11.38rem] flex flex-row items-start justify-start">
                  <div className="rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs bg-base-white box-border h-[2.38rem] overflow-hidden flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="relative">
                      <b className="font-inter-body-14-semibold">1-25</b>
                      <span className="font-semibold font-inter-body-14-semibold">{` `}</span>
                      <span className="leading-[1.29rem]">of 4585</span>
                    </div>
                  </div>
                  <div className="rounded-tl-none rounded-tr-5xs rounded-br-5xs rounded-bl-none bg-base-white overflow-hidden flex flex-col items-start justify-start py-[0.56rem] px-[0.63rem] ml-[-0.06rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/chevronleft.svg"
                      />
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/chevronright1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[9.38rem] left-[18rem] flex flex-row items-start justify-start pt-[0rem] px-[1.5rem] pb-[1rem] gap-[1rem] text-[0.63rem] text-colors-text-title-secondary-text">
        <div className="rounded-2xl bg-base-white box-border w-[40.19rem] flex flex-col items-start justify-start p-[1rem] relative gap-[2rem] border-[1px] border-solid border-gray-100">
          <div className="self-stretch flex flex-row items-start justify-start z-[0] text-[1.13rem]">
            <div className="flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="flex flex-col items-start justify-start gap-[0.38rem]">
                <div className="relative font-semibold inline-block w-[21.78rem]">
                  Topics Trend
                </div>
                <div className="relative text-[0.75rem] leading-[1rem] text-colors-text-body-primary-text">{`Here’s the top 5 topics trending in your community `}</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.69rem] text-[0.75rem] text-gray-600">
                <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                  <div className="relative rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="flex-1 relative leading-[1rem]">
                    Topic One
                  </div>
                </div>
                <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                  <div className="relative rounded-sm bg-ros-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="flex-1 relative leading-[1rem]">
                    Topic One
                  </div>
                </div>
                <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                  <div className="relative rounded-sm bg-teal-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="flex-1 relative leading-[1rem]">
                    Topic One
                  </div>
                </div>
                <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                  <div className="relative rounded-sm bg-blue-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="flex-1 relative leading-[1rem]">
                    Topic One
                  </div>
                </div>
                <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                  <div className="relative rounded-sm bg-fuchsia-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="flex-1 relative leading-[1rem]">
                    Topic One
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[38.06rem] flex flex-col items-start justify-start relative gap-[0.63rem] z-[1] text-right text-gray-400">
            <div className="w-[63.69rem] flex flex-col items-end justify-start z-[0]">
              <div className="w-[63.69rem] flex flex-col items-start justify-start">
                <div className="w-[38.06rem] flex flex-col items-start justify-center gap-[0.5rem]">
                  <div className="w-[38.06rem] h-[11.94rem] flex flex-col items-start justify-between">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative inline-block w-[1.63rem] shrink-0">
                        100%
                      </div>
                      <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-dashed border-colors-border-radius-primary-border-radius" />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative inline-block w-[1.63rem] shrink-0">
                        80%
                      </div>
                      <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-dashed border-colors-border-radius-primary-border-radius" />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative inline-block w-[1.63rem] shrink-0">
                        60%
                      </div>
                      <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-dashed border-colors-border-radius-primary-border-radius" />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative inline-block w-[1.63rem] shrink-0">
                        40%
                      </div>
                      <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-dashed border-colors-border-radius-primary-border-radius" />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative inline-block w-[1.63rem] shrink-0">
                        20%
                      </div>
                      <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-dashed border-colors-border-radius-primary-border-radius" />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative inline-block w-[1.63rem] shrink-0">
                        0%
                      </div>
                      <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-solid border-colors-border-radius-primary-border-radius" />
                    </div>
                  </div>
                  <div className="w-[38.06rem] flex flex-row items-center justify-between py-[0rem] px-[1.5rem] box-border text-center text-black">
                    <div className="flex-1 relative">Mon</div>
                    <div className="flex-1 relative">Tue</div>
                    <div className="flex-1 relative">Wed</div>
                    <div className="flex-1 relative">Thu</div>
                    <div className="flex-1 relative">Fri</div>
                    <div className="flex-1 relative">Sat</div>
                    <div className="flex-1 relative">Sun</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[0rem] left-[2.13rem] w-[36.06rem] h-[11.56rem] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/chart.svg"
            />
          </div>
          <div className="my-0 mx-[!important] absolute top-[9.13rem] left-[20.63rem] rounded-5xs bg-base-white shadow-[0px_1px_8px_rgba(71,_84,_103,_0.08),_0px_0px_0px_1px_#eaecf0] overflow-hidden flex flex-col items-start justify-start p-[0.75rem] z-[2] text-gray-600 border-[0.5px] border-solid border-gray-100">
            <div className="flex flex-col items-start justify-start gap-[0.88rem]">
              <div className="rounded flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem] border-[1px] border-solid border-gray-100">
                <div className="relative">Friday, July 26, 2023</div>
              </div>
              <div className="flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[0.13rem] gap-[0.75rem] text-colors-text-body-primary-text">
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative rounded-sm bg-ros-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative inline-block w-[5.88rem] h-[0.75rem] shrink-0">
                      Topic One
                    </div>
                  </div>
                  <div className="relative font-medium text-colors-text-title-primary-text">
                    20%
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative inline-block w-[5.88rem] h-[0.75rem] shrink-0">
                      Topic Two
                    </div>
                  </div>
                  <div className="relative font-medium text-colors-text-title-primary-text">
                    10%
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative rounded-sm bg-teal-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative inline-block w-[5.88rem] h-[0.75rem] shrink-0">
                      Topic Three
                    </div>
                  </div>
                  <div className="relative font-medium text-colors-text-title-primary-text">
                    30%
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative rounded-sm bg-blue-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative inline-block w-[4.63rem] h-[0.75rem] shrink-0">
                      Topic Three
                    </div>
                  </div>
                  <div className="relative font-medium text-colors-text-title-primary-text">
                    15%
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative rounded-sm bg-fuchsia-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative inline-block w-[5.31rem] h-[0.75rem] shrink-0">
                      Topic Three
                    </div>
                  </div>
                  <div className="relative font-medium text-colors-text-title-primary-text">
                    35%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-base-white box-border w-[27.81rem] h-[22.94rem] flex flex-col items-start justify-start p-[1rem] text-[1.13rem] border-[1px] border-solid border-gray-100">
          <div className="flex flex-col items-end justify-center gap-[1rem]">
            <div className="flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.75rem] gap-[1.5rem] border-b-[1px] border-solid border-gray-100">
              <div className="w-[25.25rem] flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[0.38rem]">
                  <div className="relative font-semibold inline-block w-[21.78rem]">
                    Topics Sentiments
                  </div>
                  <div className="relative text-[0.75rem] leading-[1rem] text-colors-text-body-primary-text">{`Here’s the top 5 topics trending in your community `}</div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[4.38rem] text-[0.75rem] text-gray-600">
                <img
                  className="relative w-[10.31rem] h-[10.31rem]"
                  alt=""
                  src="/group-2.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[1rem]">
                  <div className="rounded-5xs bg-base-white flex flex-col items-start justify-start py-[0.38rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-gray-100">
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="relative rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                      <div className="relative font-medium">Positive</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-colors-text-title-primary-text">
                      <div className="relative font-semibold">61.9%</div>
                      <div className="flex flex-row items-center justify-start gap-[0.25rem] text-center text-[0.5rem] text-success-700">
                        <div className="rounded-[3.14px] bg-success-50 flex flex-row items-center justify-center py-[0.15rem] px-[0.2rem] gap-[0.1rem]">
                          <img
                            className="relative w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0"
                            alt=""
                            src="/product-iconarrownarrowup.svg"
                          />
                          <div className="relative font-semibold">2.5%</div>
                        </div>
                        <div className="relative text-[0.63rem] text-colors-text-body-primary-text text-left">
                          vs Last Week
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-5xs bg-base-white flex flex-col items-start justify-start py-[0.38rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-gray-100">
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="relative rounded-sm bg-teal-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                      <div className="relative font-medium">Neutral</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-colors-text-title-primary-text">
                      <div className="relative font-semibold">61.9%</div>
                      <div className="flex flex-row items-center justify-start gap-[0.25rem] text-center text-[0.5rem] text-success-700">
                        <div className="rounded-[3.14px] bg-success-50 flex flex-row items-center justify-center py-[0.15rem] px-[0.2rem] gap-[0.1rem]">
                          <img
                            className="relative w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0"
                            alt=""
                            src="/product-iconarrownarrowup1.svg"
                          />
                          <div className="relative font-semibold">2.5%</div>
                        </div>
                        <div className="relative text-[0.63rem] text-colors-text-body-primary-text text-left">
                          vs Last Week
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-5xs bg-base-white flex flex-col items-start justify-start py-[0.38rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-gray-100">
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="relative rounded-sm bg-ros-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                      <div className="relative font-medium">Negative</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-colors-text-title-primary-text">
                      <div className="relative font-semibold">61.9%</div>
                      <div className="flex flex-row items-center justify-start gap-[0.25rem] text-center text-[0.5rem] text-success-700">
                        <div className="rounded-[3.14px] bg-success-50 flex flex-row items-center justify-center py-[0.15rem] px-[0.2rem] gap-[0.1rem]">
                          <img
                            className="relative w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0"
                            alt=""
                            src="/product-iconarrownarrowup2.svg"
                          />
                          <div className="relative font-semibold">2.5%</div>
                        </div>
                        <div className="relative text-[0.63rem] text-colors-text-body-primary-text text-left">
                          vs Last Week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-primary-50 flex flex-row items-center justify-start py-[0.38rem] px-[0.5rem] gap-[0.42rem] text-[0.75rem] text-gray-600">
              <img
                className="relative w-[0.94rem] h-[0.94rem] overflow-hidden shrink-0"
                alt=""
                src="/question.svg"
              />
              <div className="relative leading-[1rem]">
                What these stats mean?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3.13rem] left-[18rem] w-[72.06rem] flex flex-col items-start justify-start pt-[0rem] px-[1.5rem] pb-[1rem] box-border text-[1.5rem] text-colors-text-title-secondary-text">
        <div className="self-stretch rounded-2xl bg-base-white flex flex-row items-center justify-start p-[1.5rem] gap-[11.19rem] border-[1px] border-solid border-gray-100">
          <div className="relative font-semibold inline-block w-[20.5rem] shrink-0">
            Topics
          </div>
          <div className="w-[27.63rem] flex flex-row items-center justify-start gap-[0.75rem] text-[0.75rem]">
            <div className="rounded-5xs box-border w-[19.31rem] flex flex-row items-center justify-between py-[0.38rem] px-[0.5rem] border-[1px] border-solid border-gray-100">
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-md bg-color-gray-50 box-border h-[1.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.38rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <img
                      className="relative w-[0.88rem] h-[0.88rem] overflow-hidden shrink-0"
                      alt=""
                      src="/social1.svg"
                    />
                    <div className="relative font-medium">WhatsApp</div>
                  </div>
                  <img
                    className="relative w-[0.88rem] h-[0.88rem] overflow-hidden shrink-0"
                    alt=""
                    src="/product-iconclose.svg"
                  />
                </div>
              </div>
              <img
                className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                alt=""
                src="/chevronselectorvertical1.svg"
              />
            </div>
            <div className="rounded-5xs bg-base-white box-border w-[11.69rem] h-[2.25rem] flex flex-row items-center justify-center py-[0.56rem] px-[0.75rem] gap-[5rem] border-[1px] border-solid border-gray-100">
              <div className="flex-1 flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevrondown4.svg"
                />
                <div className="relative font-medium">Last week</div>
              </div>
              <img
                className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                alt=""
                src="/chevrondown5.svg"
              />
            </div>
            <div className="rounded-5xs bg-base-white flex flex-row items-start justify-start p-[0.56rem] border-[1px] border-solid border-gray-100">
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0"
                alt=""
                src="/download.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] bg-base-white box-border h-[58.79rem] flex flex-col items-start justify-between p-[1rem] text-[1.74rem] font-raleway border-r-[1px] border-solid border-gray-100">
        <div className="h-[42.42rem] flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start gap-[1.5rem]">
            <div className="bg-base-white w-[16rem] flex flex-row items-center justify-start py-[0.75rem] px-spacing-space-8 box-border relative gap-[0.75rem]">
              <img
                className="relative rounded-[7.97px] w-[2.49rem] h-[2.49rem] overflow-hidden shrink-0 z-[0]"
                alt=""
                src="/logo-icon.svg"
              />
              <div className="relative font-extrabold z-[1]">Grovio</div>
              <div className="my-0 mx-[!important] absolute top-[1.25rem] left-[14rem] rounded-border-radius-radius-6 bg-base-white flex flex-row items-start justify-start p-[0.38rem] z-[2] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                <imgimport { react } from '@vitejs/plugin-react';

                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/alignleft.svg"
                />
              </div>
            </div>
            <div className="w-[16rem] flex flex-col items-start justify-start gap-[0.25rem] text-[0.88rem] text-colors-text-title-secondary-text font-inter-body-14-semibold">
              <div className="bg-base-white w-[16rem] flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 box-border gap-[0.5rem]">
                <div className="w-[12.5rem] flex flex-row items-center justify-start gap-[0.88rem]">
                  <img
                    className="relative rounded-border-radius-radius-6 w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/nav-icon.svg"
                  />
                  <div className="relative font-medium">Home</div>
                </div>
                <div className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-[0.13rem] px-[0.25rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="relative leading-[1.13rem]">10</div>
                </div>
                <div className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0" />
              </div>
              <div className="w-[16rem] flex flex-col items-start justify-start gap-[0.38rem] text-colors-text-title-primary-text">
                <div className="rounded-border-radius-radius-8 bg-color-gray-50 flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="w-[12.5rem] flex flex-row items-center justify-start gap-[0.88rem]">
                    <img
                      className="relative rounded-border-radius-radius-6 w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                      alt=""
                      src="/nav-icon1.svg"
                    />
                    <div className="relative font-medium">Analytics</div>
                  </div>
                  <div className="rounded-border-radius-radius-6 bg-color-gray-25 hidden flex-col items-start justify-start py-[0.13rem] px-[0.25rem] text-colors-text-title-secondary-text border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="relative leading-[1.13rem]">10</div>
                  </div>
                  <img
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/chevronup.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start text-colors-text-title-secondary-text">
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[5.75rem] pl-[4.06rem] gap-[0.44rem]">
                    <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-700 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                    </div>
                    <div className="relative leading-[1.13rem] inline-block w-[7.31rem] shrink-0">
                      Members
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[5.75rem] pl-[4.06rem] gap-[0.44rem]">
                    <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                    </div>
                    <div className="relative leading-[1.13rem] inline-block w-[7.31rem] shrink-0">
                      Messages
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0.5rem] pr-[5.75rem] pl-[4.06rem] gap-[0.44rem]">
                    <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-300 w-[0.5rem] h-[0.5rem] overflow-hidden" />
                    </div>
                    <div className="relative font-semibold inline-block w-[7.31rem] shrink-0">
                      Topics
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-base-white flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[0.5rem]">
                <div className="w-[12.5rem] flex flex-row items-center justify-start gap-[0.88rem]">
                  <img
                    className="relative rounded-border-radius-radius-6 w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/nav-icon2.svg"
                  />
                  <div className="relative font-medium">Communities</div>
                </div>
                <div className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-[0.13rem] px-[0.25rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="relative leading-[1.13rem]">10</div>
                </div>
                <div className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0" />
              </div>
              <div className="bg-base-white flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[0.5rem]">
                <div className="w-[12.5rem] flex flex-row items-center justify-start gap-[0.88rem]">
                  <img
                    className="relative rounded-border-radius-radius-6 w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/nav-icon3.svg"
                  />
                  <div className="relative font-medium">Campaigns</div>
                </div>
                <div className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-[0.13rem] px-[0.25rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="relative leading-[1.13rem]">10</div>
                </div>
                <div className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0" />
              </div>
              <div className="bg-base-white w-[16rem] flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 box-border gap-[0.5rem]">
                <div className="w-[12.5rem] flex flex-row items-center justify-start gap-[0.88rem]">
                  <img
                    className="relative rounded-border-radius-radius-6 w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/nav-icon4.svg"
                  />
                  <div className="relative font-medium">Notifications</div>
                </div>
                <div className="rounded-border-radius-radius-6 bg-color-gray-50 flex flex-col items-start justify-start py-[0.13rem] px-[0.25rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="relative leading-[1.13rem]">10</div>
                </div>
                <div className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0" />
              </div>
              <div className="bg-base-white flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[0.5rem]">
                <div className="w-[12.5rem] flex flex-row items-center justify-start gap-[0.88rem]">
                  <img
                    className="relative rounded-border-radius-radius-6 w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/nav-icon5.svg"
                  />
                  <div className="relative font-medium">Settings</div>
                </div>
                <div className="rounded-border-radius-radius-6 bg-color-gray-50 hidden flex-col items-start justify-start py-[0.13rem] px-[0.25rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="relative leading-[1.13rem]">10</div>
                </div>
                <div className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-border-radius-radius-16 bg-base-white box-border w-[16rem] flex flex-row items-center justify-start p-[1rem] gap-[1.5rem] text-[0.88rem] font-inter-body-14-semibold border-[1px] border-solid border-colors-border-radius-primary-border-radius">
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            <img
              className="relative rounded-[10.32px] w-[2.63rem] h-[2.63rem] object-cover"
              alt=""
              src="/avatar@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch relative font-medium">
                Jack Finnigan
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-colors-text-body-primary-text overflow-hidden text-ellipsis whitespace-nowrap">
                jackfinnigan@grovio.x..
              </div>
            </div>
          </div>
          <img
            className="relative w-[1.06rem] h-[1.06rem] overflow-hidden shrink-0"
            alt=""
            src="/dotsvertical.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Topics;
