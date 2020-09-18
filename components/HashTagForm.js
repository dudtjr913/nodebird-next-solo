import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const HashTagForm = ({ content }) => {
	return (
		<div>
			{content.split(/(#[^\s#]+)/g).map((v, i) => {
				if (v.match(/(#[^\s#]+)/)) {
					return (
						<Link key={i} href={`hashtag/${v.slice(1)}`}>
							<a>{v}</a>
						</Link>
					);
				}
				return v;
			})}
		</div>
	);
};

HashTagForm.propTypes = {
	content: PropTypes.string.isRequired,
};

export default HashTagForm;
