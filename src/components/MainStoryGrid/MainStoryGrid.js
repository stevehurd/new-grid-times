import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<VerticalStoryWrapper key={story.id}>
							<SecondaryStory key={story.id} {...story} />
						</VerticalStoryWrapper>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionStoryList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</OpinionStoryWrapper>
					))}
				</OpinionStoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	--spacer: 16px;
	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-areas:
			"main-story secondary-stories"
			"advertisement advertisement"
			"opinion-stories opinion-stories";
		grid-template-columns: 2fr 1fr;
		gap: 48px 0px;
	}

	@media ${QUERIES.laptopAndUp} {
		grid-template-areas:
			"main-story secondary-stories opinion-stories"
			"main-story advertisement advertisement";
		grid-template-columns: 1fr 1fr 0.75fr;
		gap: 0px;
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		padding-right: var(--spacer);
		margin-right: var(--spacer);
		border-right: 1px solid var(--color-gray-300);
	}
`;

const VerticalStoryWrapper = styled.div`
	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: var(--spacer);
		margin-bottom: var(--spacer);
	}
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
	@media ${QUERIES.tabletOnly} {
		flex: 1;

		&:not(:last-of-type) {
			border-bottom: revert;
			padding-bottom: revert;
			margin-bottom: revert;
		}
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;

	@media ${QUERIES.laptopAndUp} {
		padding-right: var(--spacer);
		margin-right: var(--spacer);
		border-right: 1px solid var(--color-gray-300);
	}
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
`;

const OpinionStoryList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		flex-direction: row;
		gap: 32px;
	}
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.laptopAndUp} {
		padding-top: var(--spacer);
		margin-top: var(--spacer);
		border-top: 1px solid var(--color-gray-300);
	}
`;

export default MainStoryGrid;
